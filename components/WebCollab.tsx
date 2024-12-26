import { getWeb } from "@/lib/queries";
import { WebDesignProps } from "@/type.typing";
import ProjectCard from "./ProjectCard";

export const revalidate = 0;

export default async function WebCollab() {
  const res = await getWeb();

  return (
    <div className="grid-cols- mx-auto grid grid-cols-2 gap-3 md:grid-cols-3">
      {res?.map((data: WebDesignProps) => (
        <ProjectCard {...data} key={data._id} />
      ))}
    </div>
  );
}
