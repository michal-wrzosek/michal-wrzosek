import { getPostsDetails } from "@/lib/posts";
import Link from "next/link";
import { ArrowDownRightIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Michał Wrzosek - Posts",
  description:
    "A collection of my blog posts about web development, programming, and technology.",
};

export default async function Page() {
  const posts = await getPostsDetails();

  return (
    <div className="w-full md:w-320 md:mx-auto p-6 border-t-2 flex flex-col gap-12">
      {posts.map((post) => (
        <div key={post.slug} className="max-w-220">
          <h1 className="text-3xl font-semibold">
            <Link
              href={`/posts/${post.slug}`}
              className="flex items-center gap-2 hover:underline"
            >
              {post.title}
              <ArrowDownRightIcon className="hidden md:block size-6" />
            </Link>
          </h1>
          <small className="text-base mb-4 block">
            {post.date.format("DD MMM YYYY")}
          </small>
          <p className="text-xl">{post.description}</p>
        </div>
      ))}
    </div>
  );
}
