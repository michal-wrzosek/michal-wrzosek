import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import dayjs, { Dayjs } from "dayjs";
import { cache } from "react";

const POSTS_PATH = "src/posts";

interface PostDetailsRaw {
  date: string;
  title: string;
  description: string;
}

export interface PostDetails {
  slug: string;
  date: Dayjs;
  title: string;
  description: string;
  coverPhoto?: string;
  coverPhotoAlt?: string;
}

/**
 * All the posts details sorted by date from newest to oldest
 */
export const getPostsDetails = cache(async function getPostsDetails(): Promise<
  PostDetails[]
> {
  const postsDirectory = path.join(process.cwd(), POSTS_PATH);
  const fileNames = await fs.readdir(postsDirectory);

  const posts = await Promise.all(
    fileNames.map(async (fileName) => {
      const filePath = path.join(postsDirectory, fileName);
      const fileContents = await fs.readFile(filePath, "utf8");
      const { data } = matter(fileContents);
      const postDetailsRaw = data as PostDetailsRaw;

      return {
        slug: fileName.replace(/\.mdx$/, ""),
        date: dayjs(postDetailsRaw.date),
        title: postDetailsRaw.title,
        description: postDetailsRaw.description,
      };
    })
  );

  return posts.sort((a, b) => (a.date.isBefore(b.date) ? 1 : -1));
});

export const getPost = cache(async function getPost(
  slug: string
): Promise<{ MDXPage: React.ComponentType; details: PostDetails }> {
  const { default: MDXPage, frontmatter } = await import(`@/posts/${slug}.mdx`);

  return {
    MDXPage,
    details: {
      slug,
      date: dayjs(frontmatter.date),
      title: frontmatter.title,
      description: frontmatter.description,
      coverPhoto: frontmatter.coverPhoto,
      coverPhotoAlt: frontmatter.coverPhotoAlt,
    },
  };
});
