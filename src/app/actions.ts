"use server";
import { recommendTool } from '@/ai/flows/ai-powered-tool-recommendation';
import { tools } from '@/lib/tools';

export async function getAiRecommendation(userInput: string) {
  if (!userInput) {
    return { error: 'Please enter a task description.' };
  }
  try {
    const recommendation = await recommendTool({
      userInput,
      tools: tools.map(({ title, description }) => ({ title, description })),
    });
    return { data: recommendation };
  } catch (error) {
    console.error('AI Recommendation Error:', error);
    return { error: 'Failed to get a recommendation. The AI may be temporarily unavailable. Please try again later.' };
  }
}
