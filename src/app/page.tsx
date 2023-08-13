import PostPreview from "@/components/PostPreview";
import getPostMetadata from "@/components/getPostMetadata";

export default function Home() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} post={post} />
  ));
  return (
    <main className="grid grid-cols-3 gap-2">
      <div className="col-span-2 row-span-2">{postPreviews[0]}</div>
      {postPreviews.slice(1, postPreviews.length)}
    </main>
  );
}
