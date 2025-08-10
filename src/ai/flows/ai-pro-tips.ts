'use server';

/**
 * @fileOverview A flow that generates AI-powered Chartered Accountancy tips based on user input.
 *
 * - `getAiProTips` - A function that generates tips based on the user's question.
 * - `AiProTipsInput` - The input type for the `getAiProTips` function.
 * - `AiProTipsOutput` - The return type for the `getAiProTips` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiProTipsInputSchema = z.object({
  question: z
    .string()
    .describe('The Chartered Accountancy question from the user.'),
});
export type AiProTipsInput = z.infer<typeof AiProTipsInputSchema>;

const AiProTipsOutputSchema = z.object({
  tip: z.string().describe('The AI-generated Chartered Accountancy tip.'),
});
export type AiProTipsOutput = z.infer<typeof AiProTipsOutputSchema>;

export async function getAiProTips(input: AiProTipsInput): Promise<AiProTipsOutput> {
  return aiProTipsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiProTipsPrompt',
  input: {schema: AiProTipsInputSchema},
  output: {schema: AiProTipsOutputSchema},
  prompt: `You are a helpful AI assistant providing Chartered Accountancy tips.

  Based on the user's question, provide a concise and helpful tip.

  Question: {{{question}}}
  `,
});

const aiProTipsFlow = ai.defineFlow(
  {
    name: 'aiProTipsFlow',
    inputSchema: AiProTipsInputSchema,
    outputSchema: AiProTipsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
