import { Docs, docs } from '@/.velite'
import {MetadataRoute} from "next";


export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://d.irsyad.co',
            lastModified: new Date(),
        },
        ...docs.map((doc: Docs) => ({
            url: `https://d.irsyad.co/${doc.slug}`,
            lastModified: new Date(),
        })),
    ];
}
