import { Metadata } from "next";
import Link from "next/link";

export interface IPosts {
  id: number;
  title: string;
  body: string;
}

async function getData(): Promise<IPosts[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  });
  return response.json();
}
export const metaData: Metadata = {
  title: "Blog | Next App",
};

const Blog = async () => {
  const posts = await getData();

  return (
    <section className="flex justify-center flex-col">
      <h1 className="flex justify-center text-3xl mb-3">Blog Page</h1>
      <div className="flex flex-col gap-1">
        {posts.map((post) => (
          <div
            className="flex flex-col text-center p-2 border-2 border-white-100 bg-gray-600 text-white"
            key={post.id}
          >
            <span>{`${post.id}. ${post.title}`}</span>
            <button className="border border-white mt-2">
              <Link href={`/blog/${post.id}`}>Перейти</Link>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
