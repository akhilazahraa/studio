"use server";

import { z } from "zod";

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
