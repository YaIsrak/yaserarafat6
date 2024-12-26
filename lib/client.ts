import { createClient as sanityClient } from "@sanity/client";
import { env } from "./utils";

export default sanityClient({
  projectId: env.PROJECT_ID,
  dataset: "production",
  useCdn: false,
  apiVersion: "2022-02-03",
});
