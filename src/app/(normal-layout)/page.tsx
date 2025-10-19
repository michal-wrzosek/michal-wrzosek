import { Homepage } from "@/components/pages/homepage";
import { getPostsDetails } from "@/lib/posts";

export default async function Home() {
  // last 4 posts
  const posts = (await getPostsDetails()).slice(0, 4);

  return <Homepage posts={posts} />;
}
