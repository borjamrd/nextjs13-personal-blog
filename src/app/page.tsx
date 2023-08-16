import PostPreview from "@/components/PostPreview";
import getPostMetadata from "@/components/getPostMetadata";

export default function Home() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post, i) => (
    <PostPreview key={post.slug} index={i} post={post} />
  ));
  return (
    <main className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-2 mt-10">
      <div className="lg:col-span-2 col-span-1 row-span-2">
        {postPreviews[0]}
      </div>
      {postPreviews.slice(1, postPreviews.length)}
    </main>
  );
}
