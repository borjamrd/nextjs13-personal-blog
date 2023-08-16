import { FC } from "react";

interface PostLayoutProps {
  children: React.ReactNode;
}

const PostLayout: FC<PostLayoutProps> = ({ children }) => {
  return <div className="">{children}</div>;
};

export default PostLayout;
