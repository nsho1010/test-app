import React from "react";
import { useParams } from "react-router-dom";
import { posts } from "../data/posts";
import { format } from "date-fns";

const ArticleDetail = () => {
  const { id } = useParams();
  const post = posts[id];
  console.log(post);

  if (!post) {
    return <div>記事が存在しません。</div>;
  }

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center pt-16 pb-8 min-h-[calc(100vh-4rem)]">
      <img
        src={post.thumbnailUrl}
        alt="データから取得した画像"
        className="mb-4 max-h-[40vh] object-contain"
      />
      <div className="p-4 w-full">
        <div className="flex justify-between">
          <p className="text-gray-500">
            {format(new Date(post.createdAt), "yyyy/MM/dd")}
          </p>
          <div className="flex">
            {post.categories.map((category, catIndex) => (
              <div
                key={catIndex}
                className="text-blue-600 border-2 border-blue-600 rounded-md py-[0.2rem] px-[0.4rem] mr-2 last:mr-0"
              >
                {category}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mt-2 mb-4">{post.title}</h2>
          <div
            className="text-base"
            dangerouslySetInnerHTML={{
              __html: post.content,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
