import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { getNSFW } from "@/lib/queries";
import { AlertCircle } from "lucide-react";
import Image from "next/image";

import Link from "next/link";

export const revalidate = 0;

export default async function NFSWPage() {
  const data = await getNSFW();

  return (
    <section className="section">
      <div className="container space-y-4">
        {/* Header */}
        <div className="space-y-4">
          <h1>NSFW Art 🔞</h1>
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription className="text-lg font-extrabold">
              This page contains sexually explicit material. You must be 18
              years old.
            </AlertDescription>
          </Alert>
        </div>

        {/* Main content */}
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
