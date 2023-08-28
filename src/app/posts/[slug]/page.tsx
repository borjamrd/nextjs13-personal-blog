import BackButton from "@/components/BackButton";
import PostLayout from "@/components/PostLayout";
import getPostMetadata from "@/components/getPostMetadata";
import fs from "fs";
import matter from "gray-matter";
import readingTime from "reading-time";

const getPostContent = (slug: string) => {
  const folder = "src/posts";
  const file = `${folder}/${slug}.mdx`;

  const content = fs.readFileSync(file, "utf-8");
  const matterResult = matter(content);
  const timeToRead = readingTime(content).text;
  return { matterResult, timeToRead };
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({ slug: post.slug }));
};

type Props = {
  params: any;
};

export async function generateMetadata({ params }: Props) {
  const slug = params.slug;
  const post = getPostContent(slug);
  return {
    title: post.matterResult.data.title,
    description: post.matterResult.data.subtitle,
  };
}

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div className="mt-10 flex flex-col items-start lg:p-0">
      <BackButton />
      <div className="p-4 w-full mb-5 rounded backdrop-blur-xs dark:bg-slate-700/40 bg-cyan-700/10">
        <h1 className="text-slate-900 dark:text-slate-100 text-2xl font-semibold">
          {post.matterResult.data.title}
        </h1>
        <div className="text-xs mt-2 flex justify-start gap-3">
          <p>{post.matterResult.data.date}</p>
          <p>{post.timeToRead}</p>
        </div>
      </div>
      <article className="prose-sm prose-pre:bg-slate-800 dark:prose-pre:bg-opacity-25 prose-img:max-w-xs prose-pre:max-w-xs lg:prose-pre:max-w-xl xl:prose-pre:max-w-2xl prose-pre:backdrop-blur-lg lg:prose-lg dark:prose-h1:text-slate-100 prose-pre:text-white dark:prose-h2:text-white dark:prose-h3:text-white prose-pre:overflow-auto dark:prose-invert max-w-none prose-a:decoration-purple-600 prose-a:underline-offset-2 prose-headings:scroll-my-20 prose-img:rounded-lg ">
        <PostLayout>{post.matterResult.content}</PostLayout>
      </article>
    </div>
  );
};

export default PostPage;
