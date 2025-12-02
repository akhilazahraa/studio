import { contact } from "@/lib/data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/contact-form";
import { Mail, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-32 bg-secondary/50 dark:bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Get In Touch</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Have a project in mind, a question, or just want to say hi? Feel free to reach out. I'm always open to discussing new opportunities and collaborations.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-primary"/>
                <a href={`mailto:${contact.email}`} className="hover:text-primary transition-colors">{contact.email}</a>
              </div>
            </div>
            <div className="mt-8 flex gap-4">
              {contact.socials.map((social) => (
                <Button key={social.name} asChild variant="outline" size="icon">
                  <Link href={social.url} target="_blank" rel="noopener noreferrer">
                    <social.icon className="h-4 w-4" />
                    <span className="sr-only">{social.name}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
