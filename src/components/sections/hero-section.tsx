import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { about } from "@/lib/data";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <Image
          src="https://picsum.photos/seed/p/200/200"
          alt="Akhila Zahra"
          width={200}
          height={200}
          className="rounded-full object-cover mb-8"
          data-ai-hint="profile picture"
        />
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
          {about.name}
        </h1>
        <p className="mt-4 text-xl sm:text-2xl text-muted-foreground">
          {about.title}
        </p>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
          {about.introduction}
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
}
