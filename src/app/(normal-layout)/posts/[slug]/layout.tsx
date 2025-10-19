import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full md:w-320 md:mx-auto border-t-2">
      <div className="w-full md:w-220 md:mx-auto p-6">
        <Link href="/posts" className="flex items-center gap-2 hover:underline">
          <ArrowLeftIcon className="size-4" /> Back to posts
        </Link>
        <article className="prose prose-code:bg-gray-200 prose-code:dark:bg-gray-800 prose-li:marker:text-foreground prose-li:text-foreground max-w-none prose-headings:mt-8 prose-headings:font-semibold prose-h1:text-3xl prose-h1:md:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg prose-headings:text-foreground prose-p:text-foreground prose-code:text-foreground prose-hr:border-foreground prose-hr:border-t-2">
          {children}
        </article>
      </div>
    </div>
  );
}
