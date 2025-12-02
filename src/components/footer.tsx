import Link from "next/link";
import { contact } from "@/lib/data";
import { Button } from "@/components/ui/button";
import Logo from "./logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Logo className="h-5 w-5 text-primary" />
            <span className="text-sm text-muted-foreground">
              &copy; {currentYear} Nextfolio. All rights reserved.
            </span>
          </div>
          <div className="flex gap-2">
            {contact.socials.map((social) => (
              <Button key={social.name} asChild variant="ghost" size="icon">
                <Link href={social.url} target="_blank" rel="noopener noreferrer">
                  <social.icon className="h-4 w-4" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
