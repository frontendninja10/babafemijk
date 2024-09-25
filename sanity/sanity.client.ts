// sanity/sanity.client.ts
import "server-only";
import {
  createClient,
  type ClientConfig,
  type QueryParams,
} from "@sanity/client";
import { projectId, dataset, apiVersion, token } from "@/lib/env.api";

const config: ClientConfig = {
  projectId: "z0vx3ggx",
  dataset: "production",
  apiVersion: "2024-08-01",
  useCdn: process.env.NODE_ENV === "development" ? true : false,
  // useCdn: false,
};

const client = createClient(config);

export async function sanityFetch<QueryResponse>({
  query,
  qParams = {},
  tags,
}: {
  query: string;
  qParams?: QueryParams;
  tags: string[];
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, qParams, {
    // cache: "force-cache",
    cache: process.env.NODE_ENV === "development" ? "no-store" : "force-cache",
    next: { tags },
  });
}

export default client;
