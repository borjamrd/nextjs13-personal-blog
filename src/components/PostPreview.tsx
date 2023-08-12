import Link from "next/link";
import { FC } from "react";
import { PostMetadata } from "./PostMetadata";

interface PostPreviewProps {
  post: PostMetadata;
}

const PostPreview: FC<PostPreviewProps> = ({ post }) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <h2>{post.title}</h2>
      <p>{post.subtitle}</p>
      <p>{post.date}</p>
      <div>{post.timeToRead}</div>
    </Link>
  );
};

export default PostPreview;
