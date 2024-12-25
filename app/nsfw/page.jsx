import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import client from "@/lib/client";
import { AlertCircle } from "lucide-react";
import Image from "next/image";

import Link from "next/link";

export const revalidate = 0;

export default async function NFSWPage() {
  const data = await fetchData();

  return (
    <section className="section">
      <div className="container space-y-4">
        <div className="space-y-4">
          <h1>NSFW Art 🔞</h1>
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription className="text-lg font-extrabold">
              This page is an adult community that contains sexually explicit
              material. You must be 18 years old.
            </AlertDescription>
          </Alert>
        </div>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
          {data.map((art) => (
            <Link key={art.id} href={art.imageUrl} target="_blank">
              <Image
                width={500}
                height={500}
                src={art.imageUrl}
                alt={art.title}
                className="cursor-pointer rounded-xl"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

async function fetchData() {
  const res = await client.fetch(
    `*[_type == 'nsfw'] | order(_createdAt desc)
    {
        "id": _id,
        title,
        'imageUrl': mainImage.asset->url
    } `,
  );
  return res;
}
