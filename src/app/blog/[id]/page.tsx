import { Metadata } from "next";
import { FC } from "react";
import { IPosts } from "../page";

interface IPost {
  params: {
    id: string;
  };
}

async function getData(id: string): Promise<IPosts> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  return response.json();
}

export async function generateMetaData({
  params: { id },
}: IPost): Promise<Metadata> {
  const post = await getData(id);

  return {
    title: post.title,
  };
}

const Post: FC<IPost> = async ({ params: { id } }) => {
  const post = await getData(id);

  return <div>Post page{post.title}</div>;
};

export default Post;
