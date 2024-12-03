// content-collections.ts
import { defineCollection, defineConfig } from "@content-collections/core";
import {
  createMetaSchema,
  createDocSchema,
  transformMDX
} from "@fumadocs/content-collections/configuration";
var docs = defineCollection({
  name: "docs",
  directory: "resources/content/docs",
  include: "**/*.mdx",
  schema: createDocSchema,
  transform: transformMDX
});
var metas = defineCollection({
  name: "meta",
  directory: "resources/content/docs",
  include: "**/meta.json",
  parser: "json",
  schema: createMetaSchema
});
var content_collections_default = defineConfig({
  collections: [docs, metas]
});
export {
  content_collections_default as default
};
