import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: "h9kdqgbp",
  dataset: "production",
  useCdn: true,
  apiVersion: "13-02-2023",
});

const builder = ImageUrlBuilder(client);
export const urlFor = (source: typeof ImageUrlBuilder) => builder.image(source);

// RUN THIS to add exception for localhost 3000 CORS policy
// sanity cors add http://localhost:3000

export default client;
