"use server";

import { z } from "zod";
import { suggestOptimalProjectArrangement } from "@/ai/flows/suggest-optimal-project-arrangement";

// For Contact Form
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    const errorMessage = validatedFields.error.issues.map((issue) => issue.message).join(" ");
    return {
      message: errorMessage,
      error: true,
    };
  }

  console.log("Contact form submitted:", validatedFields.data);

  return {
    message: "Thank you! Your message has been sent.",
    error: false,
  };
}

// For AI Skill Assessment
const assessmentSchema = z.object({
  aboutMe: z.string().min(50, "About me section is too short."),
  projects: z.string().min(50, "Projects description is too short."),
});

export async function getProjectArrangement(formData: FormData) {
  const validatedFields = assessmentSchema.safeParse({
    aboutMe: formData.get("aboutMe"),
    projects: formData.get("projects"),
  });

  if (!validatedFields.success) {
    const errorMessage = validatedFields.error.issues.map((issue) => issue.message).join(" ");
    return { success: false, error: `Invalid input: ${errorMessage}` };
  }

  const projectList = validatedFields.data.projects.split('\n').filter(p => p.trim() !== '');

  if (projectList.length < 2) {
    return { success: false, error: "Please provide at least two project descriptions, each on a new line." };
  }

  try {
    const result = await suggestOptimalProjectArrangement({
      aboutMe: validatedFields.data.aboutMe,
      projects: projectList,
    });
    return { success: true, data: result };
  } catch (e) {
    console.error(e);
    return { success: false, error: "An error occurred while getting suggestions. Please try again later." };
  }
}
