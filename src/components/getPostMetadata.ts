import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "./PostMetadata";
import readingTime from "reading-time";


const getPostMetadata = (): PostMetadata[] => {
    const folder = "src/posts";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));


    const posts = markdownPosts.map((fileName) => {
        const fileContents = fs.readFileSync(`src/posts/${fileName}`, "utf-8");
        const timeToRead = readingTime(fileContents).text
        const matterResult = matter(fileContents);
        return {
            title: matterResult.data.title,
            date: matterResult.data.date,
            subtitle: matterResult.data.subtitle,
            slug: fileName.replace(".md", ""),
            timeToRead: timeToRead,
        };
    });
    return posts;
};

export default getPostMetadata