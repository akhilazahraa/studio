import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { tutorials } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ExternalLink } from "lucide-react";

export default function TutorialsSection() {
  const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

  return (
    <section id="tutorials" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center">Tutorials</h2>
        <p className="mt-4 text-lg text-muted-foreground text-center max-w-2xl mx-auto">
          Here are some tutorials I've created to share my knowledge.
        </p>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial) => {
            const tutorialImage = getImage(tutorial.image);
            return (
              <Card key={tutorial.title} className="flex flex-col">
                <CardHeader>
                  {tutorialImage && (
                    <div className="aspect-video relative overflow-hidden rounded-t-lg">
                      <Image
                        src={tutorialImage.imageUrl}
                        alt={tutorial.title}
                        fill
                        className="object-cover"
                        data-ai-hint={tutorialImage.imageHint}
                      />
                    </div>
                  )}
                  <CardTitle className="pt-4">{tutorial.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{tutorial.description}</p>
                </CardContent>
                <CardFooter className="flex justify-start gap-4">
                  <Button asChild>
                    <Link href={tutorial.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink />
                      View Tutorial
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
