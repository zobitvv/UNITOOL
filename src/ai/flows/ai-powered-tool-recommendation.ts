'use server';
/**
 * @fileOverview AI-powered tool recommendation flow.
 *
 * - recommendTool - A function that recommends a tool based on user input and task.
 * - RecommendToolInput - The input type for the recommendTool function.
 * - RecommendToolOutput - The return type for the recommendTool function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendToolInputSchema = z.object({
  userInput: z.string().describe('The user input describing the task.'),
  tools: z
    .array(
      z.object({
        title: z.string().describe('The title of the tool.'),
        description: z.string().describe('The description of the tool.'),
      })
    )
    .describe('The list of available tools.'),
});
export type RecommendToolInput = z.infer<typeof RecommendToolInputSchema>;

const RecommendToolOutputSchema = z.object({
  toolTitle: z.string().describe('The title of the recommended tool.'),
  reason: z.string().describe('The reason for recommending the tool.'),
});
export type RecommendToolOutput = z.infer<typeof RecommendToolOutputSchema>;

export async function recommendTool(input: RecommendToolInput): Promise<RecommendToolOutput> {
  return recommendToolFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendToolPrompt',
  input: {schema: RecommendToolInputSchema},
  output: {schema: RecommendToolOutputSchema},
  prompt: `You are a tool recommendation expert. Given the user input and a list of tools, you will recommend the most relevant tool to the user.\n
User Input: {{{userInput}}}\n
Available Tools:\n{{#each tools}}\n- Title: {{this.title}}\n  Description: {{this.description}}\n{{/each}}\n
Your recommendation should be in the following format:\n{
  "toolTitle": "[The title of the recommended tool]",
  "reason": "[The reason for recommending the tool]"
}

Ensure that the toolTitle is exactly the same as the title of one of the available tools.\n`,
});

const recommendToolFlow = ai.defineFlow(
  {
    name: 'recommendToolFlow',
    inputSchema: RecommendToolInputSchema,
    outputSchema: RecommendToolOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
