import client from "@/lib/client";
import { WebDesignProps } from "@/type.typing";
import ProjectCard from "./ProjectCard";

export default async function WebCollab() {
  const { res } = await getData();
  return (
    <div className="grid-cols- mx-auto grid grid-cols-2 gap-3 md:grid-cols-3">
      {res?.map((data: WebDesignProps) => (
        <ProjectCard {...data} key={data._id} />
      ))}
    </div>
  );
}

async function getData() {
  const res = await client.fetch(
    `*[_type == 'web']{
			...,
			"mainImageUrl": mainImage.asset->{url},
			technology[]->
		}`,
  );

  return { res, revalidate: 86400 };
}

export const dynamic = "force-dynamic";
