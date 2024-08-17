import Art5 from "@/public/art5.png";
import Image from "next/image";

export default function Home_Sec4() {
  return (
    <section
      className="section bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          'linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.8) 100%), url("/art5_bg.png")',
      }}
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="">
            <div className="relative mx-auto aspect-[4/5]">
              <Image
                src={Art5}
                alt={"Art5"}
                fill
                style={{ objectFit: "contain" }}
                placeholder="blur"
                className="rounded-3xl"
              />
            </div>
          </div>
          <div className="my-auto">
            <div className="md:ml-6">
              <h1 className="">Spirited Away: Chihiro</h1>
              <p className="mt-4">
                This fanart of <span className="text-primary">Chihiro</span>{" "}
                from <span className="text-primary">Spirited Away</span> depicts
                the character in her red worker&apos;s uniform, standing in
                front of the iconic bathhouse from the film. She is looking up
                at the sky with a determined expres- sion on her face, her long,
                dark hair pulled back into a ponytail.
                <br />
                <br />
                The soft and gentle style of the drawing perfectly captures
                Chihiro&apos;s innocence and hope. The delicate linework and
                muted colors create a sense of calm and tranquility, which is in
                stark contrast to the challenges that Chihiro faces in the film.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
