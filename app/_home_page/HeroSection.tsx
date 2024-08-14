import { Button } from "@/components/ui/button";
import Art1 from "@/public/art1.png";
import Art2 from "@/public/art2.png";
import Art3 from "@/public/art3.png";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="section flex h-screen items-center justify-center">
      <div className="container space-y-6 text-center">
        {/* Images */}
        <div className="flex justify-center">
          <div className="relative -right-14 aspect-[4/5] h-40 -rotate-12">
            <Image src={Art1} alt="art1" fill className="rounded-3xl" />
          </div>
          <div className="relative aspect-[4/5] h-40">
            <Image src={Art2} alt="art" fill className="rounded-3xl" />
          </div>
          <div className="relative right-14 -z-10 aspect-[4/5] h-40 rotate-12">
            <Image src={Art3} alt="art" fill className="rounded-3xl" />
          </div>
        </div>

        {/* Welcome text */}
        <h2>
          <div className="flex items-center justify-center gap-2">
            <Image
              src={Art2}
              alt="art2"
              width={30}
              height={40}
              className="-rotate-12 rounded-xl"
            />
            <span className="font-fontbold">Designing</span>{" "}
            <span className="font-fontbold">Designing</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="font-fontbold">Designing</span>
            <Image
              src={Art3}
              alt="art2"
              width={30}
              height={40}
              className="rotate-12 rounded-xl"
            />
            <span className="font-fontbold">Reality</span>
          </div>
        </h2>

        {/* small text */}
        <p className="text-sm tracking-wider">
          Discover My Journey in Art and Web Development
        </p>

        {/* description */}
        <p className="text-base md:text-lg">
          Hi, I&apos;m <span className="font-fontbold text-primary">Israk</span>{" "}
          an <span className="text-primary">illustrator</span> and{" "}
          <span className="text-primary">web developer</span> with a passion for
          creating beautiful and functional designs. I blend creativity and
          technology to bring ideas to life. Explore my works and get to know
          me.
        </p>

        {/* Button */}
        <Button variant="secondary" asChild>
          <Link href="/contact">Contact me</Link>
        </Button>
      </div>
    </section>
  );
}
