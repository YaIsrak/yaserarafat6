"use client";

// Art
import Art4 from "@/public/art4.png";
import Image from "next/image";

export default function Home_Sec1() {
  return (
    <section className="section relative">
      <div className="container">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="my-auto text-left md:text-right">
            <div className="space-y-2">
              <h1 className="text-primary">Grace and Beauty</h1>
              <p>
                A vision of grace and beauty, a woman in a traditional Indian
                sari stands before us. Her long, flowing hair cascades over her
                shoulders, and her serene eyes meet ours. The sari she wears is
                a masterpiece of color and pattern, its vibrant hues echoing the
                vibrant colors of India itself
              </p>
            </div>
          </div>

          <div>
            <div className="relative mx-auto aspect-[4/5]">
              <Image
                src={Art4}
                alt={"Grace and Beauty"}
                fill
                placeholder="blur"
                className="rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* bg-images */}
      <div className="hidden md:block">
        <div className="absolute -left-40 top-96 -z-50 h-96 w-1/3 opacity-50 blur-sm">
          <Image
            src={Art4}
            alt=""
            fill
            placeholder="blur"
            style={{ objectFit: "contain" }}
            className="grayscale"
          />
        </div>
        <div className="absolute -top-40 left-1/3 -z-50 h-96 w-1/3 opacity-50 blur-sm">
          <Image
            src={Art4}
            alt=""
            fill
            placeholder="blur"
            style={{ objectFit: "contain" }}
            className="grayscale"
          />
        </div>
      </div>
    </section>
  );
}
