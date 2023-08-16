import Link from "next/link";
import { FC } from "react";
import { PostMetadata } from "./PostMetadata";
import Image from "next/image";

interface PostPreviewProps {
  post: PostMetadata;
  index: number;
}

const PostPreview: FC<PostPreviewProps> = ({ post, index }) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <div className="lg:mb-0 mb-10 h-full flex flex-col justify-end w-full aspect-auto dark:text-neutral-400  text-neutral-800  group rounded-lg border hover:backdrop-blur-sm border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100/30 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
        <div className="">
          {post?.image && index === 0 && (
            <Image
              src={post?.image}
              height={200}
              width={630}
              className="rounded-lg mb-4"
              alt="asd"
            />
          )}
        </div>

        <h2 className="text-slate-900 dark:text-slate-100 text-2xl font-semibold">
          {post.title}
        </h2>
        <p>
          {post.subtitle?.length > 80
            ? post.subtitle?.substring(0, 80) + "..."
            : post.subtitle}
        </p>
        <div className="text-xs mt-2 flex items-center justify-between">
          <p>{post.date}</p>
          <p>{post.timeToRead}</p>
        </div>
      </div>
    </Link>
  );
};

export default PostPreview;
