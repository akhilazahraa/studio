import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { certifications } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Award } from "lucide-react";

export default function CertificationsSection() {
  const getImage = (id: string | undefined) => id ? PlaceHolderImages.find(img => img.id === id) : undefined;

  return (
    <section id="certifications" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center">Licenses & Certifications</h2>
        <p className="mt-4 text-lg text-muted-foreground text-center max-w-2xl mx-auto">
          Here are some of the certifications I've earned.
        </p>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => {
            const certImage = getImage(cert.image);
            return (
              <Card key={cert.title} className="flex flex-col">
                <CardHeader>
                  {certImage && (
                    <div className="aspect-video relative overflow-hidden rounded-t-lg mb-4">
                      <Image
                        src={certImage.imageUrl}
                        alt={cert.title}
                        fill
                        className="object-cover"
                        data-ai-hint={certImage.imageHint}
                      />
                    </div>
                  )}
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary p-2 rounded-full hidden sm:block">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle>{cert.title}</CardTitle>
                      <CardDescription className="mt-1">{cert.issuer} &middot; {cert.date}</CardDescription>
                      {cert.credential !== '-' && (
                          <CardDescription className="text-xs">Credential: {cert.credential}</CardDescription>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{cert.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
