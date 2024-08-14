"use client";

import Art2 from "@/public/art2.png";
import Image from "next/image";

export default function Section2() {
  return (
    <section
      className="section bg-contain bg-center bg-no-repeat"
      style={{
        backgroundImage:
          'linear-gradient(to bottom, rgba(14, 14, 14, 0.8) 0%, rgba(14, 14, 14, 0.8) 100%), url("/art2_bg.png")',
      }}
    >
      <div className="container">
        <h2 className="mb-4 text-center">Kohotobyo</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* column 1 */}
          <div className="my-auto">
            <p className="text-right text-sm">
              This portrait of Kohotobyo is done in the style of Jamini Roy, one
              of India&apos;s most celebrated artists. Roy was known for his
              bold, minimalist style and his focus on painting everyday people.
              This portrait is a perfect example of Roy&apos;s work. Kohotobyo
              is depicted with a serious expression on her face, her large, dark
              eyes meeting the viewer&apos;s gaze. Her long black hair is pulled
              back into a simple bun, and .she is wearing a simple black dress
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <div className="relative mx-auto aspect-[4/5]">
              <Image
                src={Art2}
                alt={"Grace and Beauty"}
                fill
                placeholder="blur"
                className="rounded-3xl"
              />
            </div>
          </div>

          {/* Column 3 */}
          <div className="mt-6 md:my-auto">
            <p className="text-sm">
              The use of bold colors and simple shapes is characteristic of
              Roy&apos;s style. The black of Kohotobyo&apos;s hair and dress
              contrasts sharply with the light brown of her skin and the white
              of the background. The artist has used simple lines to create a
              sense of depth and perspective in the portrait, and the use of
              light and shadow high- lights Kohotobyo&apos;s features
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
