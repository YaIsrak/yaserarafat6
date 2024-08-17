import BlurFade from "@/components/magicui/blur-fade";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { experiences } from "@/lib/constants";
import Link from "next/link";

export default function About_Exp() {
  return (
    <section className="container py-[5vmin]">
      <BlurFade inView>
        <h5 className="mb-4 text-primary">Work Experience</h5>
      </BlurFade>
      <BlurFade inView className="flex flex-col gap-4">
        {experiences.map((exp, i) => (
          <Link href={exp.link} key={i} className="flex items-center gap-4">
            <Avatar className="size-12 bg-primary-foreground/10">
              <AvatarFallback>W</AvatarFallback>
              <AvatarImage
                src={exp.image}
                alt={exp.name}
                className="object-cover"
              />
            </Avatar>

            <div className="flex-1">
              <p className="text-semibold text-lg text-primary">{exp.name}</p>
              <p className="text-sm text-muted-foreground">{exp.post}</p>
            </div>

            <div className="text-right text-sm text-muted-foreground">
              <p>{exp.time}</p>
              <p>{exp.location}</p>
            </div>
          </Link>
        ))}
      </BlurFade>
    </section>
  );
}
