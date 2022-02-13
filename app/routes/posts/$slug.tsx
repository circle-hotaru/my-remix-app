import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import invariant from "tiny-invariant";
import { getPost } from "~/post";

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, "expect params.slug");
  return getPost(params.slug);
};

export default function PostSlug() {
  const post = useLoaderData();
  console.log(post);

  return <div dangerouslySetInnerHTML={{ __html: post.html }} />;
}
