import client from "@/lib/client";
import { WebDesignProps } from "@/type.typing";
import ProjectCard from "./ProjectCard";

export default async function WebCollab() {
  const datas = await client.fetch(
    `*[_type == 'web']{
			...,
			"mainImageUrl": mainImage.asset->{url},
			technology[]->
		}`,
  );

  return (
    <div className="grid-cols- mx-auto grid grid-cols-2 gap-3 md:grid-cols-3">
      {datas?.map((data: WebDesignProps) => (
        <ProjectCard {...data} key={data._id} />
      ))}
    </div>
  );
}
