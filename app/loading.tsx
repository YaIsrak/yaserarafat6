import { Loader } from "lucide-react";

export default function Loading() {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <Loader className="h-8 w-8 animate-spin text-primary" />
    </main>
  );
}
