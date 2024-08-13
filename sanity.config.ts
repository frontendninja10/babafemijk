import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
// import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
// import { codeInput } from "@sanity/code-input";

export default defineConfig({
  name: "default",
  title: "Babafemi Jk Sanity Site",
  basePath: "/studio",
  projectId: "z0vx3ggx",
  dataset: "production",
  // plugins: [structureTool(), visionTool()],
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
