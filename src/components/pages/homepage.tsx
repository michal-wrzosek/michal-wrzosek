import Image from "next/image";
import { TwitterIcon } from "../icons/twitter-icon";
import { GitHubIcon } from "../icons/github-icon";
import { LinkedinIcon } from "../icons/linkedin-icon";
import { ArrowDownRightIcon } from "@heroicons/react/24/solid";
import { PostDetails } from "@/lib/posts";
import { Fragment } from "react";
import Link from "next/link";

const CoverImage = () => (
  <div className="w-full md:mx-auto md:w-320 overflow-hidden aspect-[2048/640]">
    <Image
      src="/cover-2048x640.png"
      alt="Cover image of Michal seating in front of computer in the jungle"
      className="w-full scale-150 md:scale-100"
      width={2048}
      height={640}
    />
  </div>
);

const AboutMe = () => (
  <div className="md:w-320 mx-auto p-6 flex flex-col-reverse md:flex-row gap-4 md:gap-0">
    <div className="font-semibold text-2xl md:text-5xl md:pr-6">
      {`As a web developer, I'm passionate about creating high-performance applications, open-source contributions, and building innovative solutions.`}
    </div>
    <div className="md:w-110 md:shrink-0 md:border-l-2 md:pl-6 flex flex-col">
      <div className="uppercase text-base text-subtle md:normal-case md:text-foreground mb-2 md:mb-0 md:font-semibold md:text-xl">
        (About me)
      </div>
      <ul className="inline-flex gap-2 mt-auto">
        <li className="rounded-full size-8 bg-foreground hover:bg-gray-500 inline-flex justify-center items-center">
          <Link
            href="https://x.com/xforartworks"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon className="size-5 text-background" />
          </Link>
        </li>
        <li className="rounded-full size-8 bg-foreground hover:bg-gray-500 inline-flex justify-center items-center">
          <Link
            href="https://github.com/michal-wrzosek"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon className="size-5 text-background" />
          </Link>
        </li>
        <li className="rounded-full size-8 bg-foreground hover:bg-gray-500 inline-flex justify-center items-center">
          <Link
            href="https://www.linkedin.com/in/michal-wrzosek-cv/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon className="size-4 text-background" />
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

const RecentPosts = ({ posts }: { posts: PostDetails[] }) => (
  <div className="w-full md:w-320 md:mx-auto p-6 flex flex-col md:flex-row border-t-2">
    <div className="flex w-full md:w-110 md:shrink-0 md:border-r-2 pr-6">
      <div className="text-subtle uppercase text-base mb-2 md:mb-0 md:normal-case md:text-foreground md:font-semibold md:text-xl">
        (Recent posts)
      </div>
      <ArrowDownRightIcon className="hidden md:block ml-auto size-6" />
    </div>
    <div className="flex flex-col gap-6 md:grid md:grid-cols-[1fr_2px_1fr] md:ml-6">
      {posts.slice(0, 4).map((post, postIndex) => (
        <Fragment key={post.slug}>
          <div className="flex flex-col gap-2">
            <div className="font-semibold text-3xl">
              <Link href={`/posts/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
            </div>
            <div className="text-xs">{post.date.format("DD MMM YYYY")}</div>
            <div className="">{post.description}</div>
          </div>
          {/* Vertical separator */}
          {[0, 2].includes(postIndex) ? (
            <div className="hidden md:block border-l-2"></div>
          ) : null}
        </Fragment>
      ))}
    </div>
  </div>
);

export interface HomepageProps {
  posts: PostDetails[];
}

export function Homepage({ posts }: HomepageProps) {
  return (
    <div>
      <CoverImage />
      <AboutMe />
      <RecentPosts posts={posts} />
    </div>
  );
}
