import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "@/components/getPostMetadata";
import readingTime from "reading-time";

const getPostContent = (slug: string) => {
  const folder = "src/posts";
  const file = `${folder}/${slug}.md`;
  const content = fs.readFileSync(file, "utf-8");
  const matterResult = matter(content);
  const timeToRead = readingTime(content).text;
  return { matterResult, timeToRead };
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({ slug: post.slug }));
};
const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div>
      <h1>{post.matterResult.data.title}</h1>
      <article className="prose dark:prose-invert dark:prose-pre:bg-slate-800 lg:prose-lg dark:prose-h1:text-slate-100 dark:prose-h2:text-white dark:prose-h3:text-yellow-300">
        <div>{post.timeToRead}</div>
        <Markdown>{post.matterResult.content}</Markdown>
      </article>
    </div>
  );
};

export default PostPage;
