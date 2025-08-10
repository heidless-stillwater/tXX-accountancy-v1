"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { getAiProTips, type AiProTipsInput } from '@/ai/flows/ai-pro-tips';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Loader2, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

const FormSchema = z.object({
  question: z.string().min(10, {
    message: "Please ask a more detailed question (at least 10 characters).",
  }),
});

export function AiTips() {
  const [tip, setTip] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      question: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);
    setTip(null);
    try {
      const result = await getAiProTips(data as AiProTipsInput);
      setTip(result.tip);
    } catch (error) {
      console.error("Failed to get AI tip:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Could not generate a tip. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="ai-pro-tips" className="bg-card py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
            <Badge variant="outline" className="text-sm font-semibold">AI Pro Tips</Badge>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mt-2">
                Instant Accountancy Insights
            </h2>
            <p className="mt-2 font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                Have a question? Get a quick, AI-powered tip from our Chartered Accountancy expert system.
            </p>
        </div>

        <Card className="max-w-2xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Ask a Question</CardTitle>
            <CardDescription>Enter a topic below to receive an AI-generated professional tip.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="question"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="e.g., How can I improve my business cash flow?" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Sparkles className="mr-2 h-4 w-4" />
                  )}
                  Generate Tip
                </Button>
              </form>
            </Form>

            {isLoading && (
              <div className="mt-6 flex items-center justify-center text-muted-foreground">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                <span>Generating tip...</span>
              </div>
            )}

            {tip && (
              <div className="mt-6 p-4 bg-background rounded-lg border">
                <h3 className="font-headline font-bold text-lg mb-2 text-foreground">
                  AI-Generated Tip:
                </h3>
                <p className="font-body text-muted-foreground whitespace-pre-wrap">
                  {tip}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
