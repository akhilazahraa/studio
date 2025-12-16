import Image from 'next/image';
import { Badge } from "@/components/ui/badge";
import { skills } from "@/lib/data";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center">Skills</h2>
        <div className="mt-16 flex flex-wrap gap-4 justify-center">
          {skills.map((skill) => (
            <Badge key={skill.name} variant="secondary" className="text-sm px-4 py-2 flex items-center gap-2">
              <Image src={skill.icon} alt={`${skill.name} logo`} width={18} height={18} className="h-5 w-5" />
              {skill.name}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
