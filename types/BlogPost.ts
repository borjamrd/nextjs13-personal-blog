import { PostMetadata } from '@/components/PostMetadata'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'


export type BlogPost = {
    mdxSource: MDXRemoteSerializeResult
    frontMatter: PostMetadata
}