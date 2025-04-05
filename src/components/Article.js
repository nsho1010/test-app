import React from "react";
import { posts } from "../data/posts";

const Article = () => {
  console.log(posts);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen ">
      {posts.map((post, index) => (
        <div
          key={index}
          className="border-2  border-gray-300 w-full max-w-3xl mx-auto p-4 mb-8"
        >
          <div className="flex justify-between">
            <p className="text-gray-500">{post.createdAt}</p>
            <div className="flex mr-8">
              {post.categories.map((category, catIndex) => (
                <div
                  key={catIndex}
                  className="text-blue-600 border-2 border-blue-600 rounded-md py-[0.2rem] px-[0.4rem] mr-2"
                >
                  {category}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mt-2 mb-4">{post.title}</h2>
            <div
              className="line-clamp-2"
              dangerouslySetInnerHTML={{
                __html:
                  post.content.length > 150
                    ? post.content.substring(0, 150) + "..."
                    : post.content,
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Article;
