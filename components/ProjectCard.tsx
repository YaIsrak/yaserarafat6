import { WebDesignProps } from "@/type.typing";
import { Github, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import CustomLink from "./ui/link";

export default function ProjectCard({
  url,
  title,
  mainImageUrl,
  github,
  technology,
}: WebDesignProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden rounded-2xl border">
      <Link href={url || "#"} target="_blank">
        {mainImageUrl && (
          <Image
            src={mainImageUrl.url}
            alt={title}
            width={500}
            height={300}
            className="object-hidden h-40 w-full object-cover object-top"
          />
        )}
      </Link>

      {/* Titlee */}
      <CardHeader>
        <CardTitle className="text-base tracking-wide text-primary">
          {title}
        </CardTitle>
      </CardHeader>

      {/* Content */}
      <CardContent className="">
        {technology && technology.length > 0 && (
          <div className="flex-warp flex gap-1">
            {technology.map((tech) => (
              <Badge key={tech._id} variant="secondary" className="text-[10px]">
                <span className="text-nowrap">{tech.name}</span>
              </Badge>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter>
        <div className="flex-warp flex flex-col items-start gap-4">
          <CustomLink
            href={url}
            target="_blank"
            className="flex items-center gap-2 text-xs"
          >
            <Globe className="h-4 w-4" />
            Website
          </CustomLink>
          {github && github !== "" && (
            <CustomLink
              href={github}
              target="_blank"
              className="flex items-center gap-2 text-xs"
            >
              <Github className="h-4 w-4" />
              Github
            </CustomLink>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
