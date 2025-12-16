import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { experience } from "@/lib/data";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 sm:py-32 bg-secondary/30 dark:bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center">Experience</h2>
        <div className="mt-16 max-w-4xl mx-auto">
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
              {experience.map((item, index) => (
                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border bg-card shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="12"><path d="M12 6.132v-.253l-6-4-6 4v.253l6 4zM0 6.993v4.148l6 3.864 6-3.864V6.993l-6 4z" /></svg>
                  </div>
                  <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
                    <CardHeader>
                      <CardTitle>{item.role}</CardTitle>
                      <CardDescription>{item.company} &middot; {item.period}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
}
