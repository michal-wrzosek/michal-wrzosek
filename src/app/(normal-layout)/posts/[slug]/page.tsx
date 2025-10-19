import { getPost, getPostsDetails } from "@/lib/posts";
import { Metadata } from "next";

interface Params {
  slug: string;
}

interface Props {
  params: Promise<Params>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { details } = await getPost(slug);

  return {
    title: details.title,
    description: details.description,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const { MDXPage, details } = await getPost(slug);

  return (
    <>
      {details.coverPhoto ? (
        <>
          <img
            src={details.coverPhoto}
            alt={details.coverPhotoAlt ?? details.title}
            className="not-prose w-full h-auto mt-6"
          />
          {details.coverPhotoAlt ? (
            <p className="not-prose text-center text-sm text-gray-500 mt-2">
              {details.coverPhotoAlt}
            </p>
          ) : null}
          <div className="mb-8 md:mb-16" />
        </>
      ) : null}
      <h1>{details.title}</h1>
      <p>{details.date.format("DD MMM YYYY")}</p>
      <MDXPage />
    </>
  );
}

export async function generateStaticParams(): Promise<Params[]> {
  const posts = await getPostsDetails();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export const dynamicParams = false;
