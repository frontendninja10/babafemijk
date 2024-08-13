// sanity/sanity.client.ts

import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "z0vx3ggx",
  dataset: "production",
  apiVersion: "2024-08-01",
  useCdn: false,
};

const client = createClient(config);

export default client;
