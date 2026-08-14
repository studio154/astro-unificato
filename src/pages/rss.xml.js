import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("posts");

  const publishedPosts = posts
    .filter((post) => !post.data.draft)
    .sort(
      (a, b) =>
        new Date(b.data.pubDate).getTime() -
        new Date(a.data.pubDate).getTime()
    );

  return rss({
    title: "Blog di fotografia | Elio Leonardo Carchidi",
    description:
      "Articoli, riflessioni e approfondimenti sulla fotografia, sul lavoro del fotografo professionista e sulla cultura dell'immagine.",
    site: context.site,
    items: publishedPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: new Date(post.data.pubDate),
      link: `/${post.slug}/`,
    })),
  });
}