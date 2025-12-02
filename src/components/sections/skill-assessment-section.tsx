"use client";

import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getProjectArrangement } from "@/app/actions";
import { fullAboutMe, projects } from "@/lib/data";
import { Loader2, Wand2, Lightbulb } from "lucide-react";
import type { SuggestOptimalProjectArrangementOutput } from "@/ai/flows/suggest-optimal-project-arrangement";

export default function SkillAssessmentSection() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<SuggestOptimalProjectArrangementOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const initialProjectsText = projects.map(p => p.description).join('\n\n');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    
    startTransition(async () => {
      setResult(null);
      setError(null);
      const response = await getProjectArrangement(formData);
      if (response.success) {
        setResult(response.data);
      } else {
        setError(response.error);
      }
    });
  };

  return (
    <section id="ai-assistant" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">AI Portfolio Assistant</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Not sure how to best present your projects? Let our AI assistant analyze your skills and project descriptions to suggest the optimal arrangement for your portfolio.
            </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <Card>
            <CardHeader>
              <CardTitle>Your Details</CardTitle>
              <CardDescription>Provide your info and project descriptions below.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="aboutMe">About Me & Skills</Label>
                  <Textarea
                    id="aboutMe"
                    name="aboutMe"
                    rows={8}
                    defaultValue={fullAboutMe}
                    placeholder="Tell me about your skills and experience..."
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="projects">Project Descriptions</Label>
                  <Textarea
                    id="projects"
                    name="projects"
                    rows={10}
                    defaultValue={initialProjectsText}
                    placeholder="Enter each project description on a new line."
                    required
                  />
                </div>
                <Button type="submit" disabled={isPending} className="w-full">
                  {isPending ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <Wand2 />
                  )}
                  Suggest Arrangement
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="lg:mt-12">
            {isPending && (
              <div className="flex flex-col items-center justify-center gap-4 text-center p-8 border-2 border-dashed rounded-lg">
                <Loader2 className="h-12 w-12 animate-spin text-primary" />
                <p className="text-muted-foreground">Analyzing your portfolio... this might take a moment.</p>
              </div>
            )}
            {error && <Card className="bg-destructive/20 border-destructive"><CardContent className="p-6"><p className="text-destructive-foreground">{error}</p></CardContent></Card>}
            {result && (
              <Card className="bg-green-500/10 border-green-500/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Lightbulb /> Here's your suggested project arrangement:</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <ol className="list-decimal list-inside space-y-3">
                      {result.arrangement.map((projectDesc, index) => (
                        <li key={index} className="p-3 bg-card rounded-md">
                          <p className="font-semibold text-sm">Project #{index + 1}</p>
                          <p className="text-muted-foreground text-sm">{projectDesc}</p>
                        </li>
                      ))}
                    </ol>
                  </div>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="reasoning">
                      <AccordionTrigger>Why this order?</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {result.reasoning}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            )}
            {!isPending && !result && !error && (
              <div className="flex flex-col items-center justify-center gap-4 text-center p-8 border-2 border-dashed rounded-lg">
                <Wand2 className="h-12 w-12 text-muted-foreground" />
                <p className="text-muted-foreground">Your AI-powered suggestions will appear here.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
