'use server';
/**
 * @fileOverview This file defines a Genkit flow that suggests an optimal project arrangement for a portfolio,
 *  based on the skills listed in the about me section.
 *
 * - suggestOptimalProjectArrangement - A function that triggers the flow and returns the suggested arrangement.
 * - SuggestOptimalProjectArrangementInput - The input type for the suggestOptimalProjectArrangement function.
 * - SuggestOptimalProjectArrangementOutput - The return type for the suggestOptimalProjectArrangement function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestOptimalProjectArrangementInputSchema = z.object({
  aboutMe: z.string().describe('The about me section of the portfolio, describing skills and experience.'),
  projects: z.array(z.string()).describe('An array of project descriptions in the portfolio.'),
});
export type SuggestOptimalProjectArrangementInput = z.infer<typeof SuggestOptimalProjectArrangementInputSchema>;

const SuggestOptimalProjectArrangementOutputSchema = z.object({
  arrangement: z.array(z.string()).describe('The suggested order of projects to best showcase skills.'),
  reasoning: z.string().describe('The reasoning behind the suggested arrangement.'),
});
export type SuggestOptimalProjectArrangementOutput = z.infer<typeof SuggestOptimalProjectArrangementOutputSchema>;

export async function suggestOptimalProjectArrangement(
  input: SuggestOptimalProjectArrangementInput
): Promise<SuggestOptimalProjectArrangementOutput> {
  return suggestOptimalProjectArrangementFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestOptimalProjectArrangementPrompt',
  input: {schema: SuggestOptimalProjectArrangementInputSchema},
  output: {schema: SuggestOptimalProjectArrangementOutputSchema},
  prompt: `You are an expert portfolio advisor. Given an "about me" section describing skills and experience, and a list of projects, determine the optimal order to showcase projects in a portfolio so that the most relevant skills are highlighted.

About Me Section: {{{aboutMe}}}

Projects:{{#each projects}} 
- {{{this}}}{{/each}}

Consider the following:
* Which projects best demonstrate the skills mentioned in the "About Me" section?
* In what order should the projects be presented to create a compelling narrative of skill development and expertise?
* Provide clear reasoning for the suggested arrangement.
`,
});

const suggestOptimalProjectArrangementFlow = ai.defineFlow(
  {
    name: 'suggestOptimalProjectArrangementFlow',
    inputSchema: SuggestOptimalProjectArrangementInputSchema,
    outputSchema: SuggestOptimalProjectArrangementOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
