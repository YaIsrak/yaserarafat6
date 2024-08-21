import BlurFade from "@/components/magicui/blur-fade";
import pp from "@/public/pp.jpg";
import Image from "next/image";

export default function About_Sec1() {
  return (
    <section className="section">
      <div className="container">
        <BlurFade className="flex gap-4 md:gap-12" inView>
          <div className="flex-1 space-y-4">
            <h3 className="text-primary">MD Yaser Arafat Isak</h3>
            <p className="text-xs tracking-widest text-muted-foreground md:text-sm">
              A BANGLADESH BASED ARTIST, WEB DEVELOPER & ILLUSTRATOR
              SPECIALIZING IN BRANDING AND ILLUSTRATION. I LOVE CREATING BOLD
              CREATIVE WORKS AND ENJOY ILLUSTRATING COLORFUL EDITORIAL VISUALS
              AND DRAWINGS WHICH ARE FUN TO LOOK AT BUT AT THE SAME TIME SPREAD
              AWARENESS.
            </p>
          </div>

          <BlurFade inView>
            <Image
              src={pp}
              alt="art1"
              className="size-36 rounded-full md:size-56"
              placeholder="blur"
              width={200}
              height={200}
            />
          </BlurFade>
        </BlurFade>
      </div>
    </section>
  );
}
