import { contactList } from "@/lib/constants";
import Link from "next/link";
import CustomLink from "../ui/link";

export default function Footer() {
  return (
    <section className="border-t py-[5vmin]">
      <div className="container">
        <div className="my-8 flex gap-4">
          {contactList.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <item.icon className="h-6 w-6" />
            </Link>
          ))}
        </div>

        <div className="my-8">
          <h5 className="text-primary">Thanks for checking my website!</h5>
          <p className="text-sm text-muted-foreground lg:text-lg">
            {"// It's a work in progress so check back often!"}
          </p>
          <CustomLink href={"/blog"}>See my blog</CustomLink>
        </div>
      </div>
    </section>
  );
}
