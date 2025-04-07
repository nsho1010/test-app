import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import axios from "axios";

const Article = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAllPosts = async () => {
      try {
        const res = await axios.get(
          `https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts`
        );
        setPosts(res.data.posts);
      } catch (error) {
        setError("記事一覧が取得に失敗しました。");
      }
    };

    getAllPosts();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!posts) {
    return <div>読み込み中...</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen ">
      {posts.map((post, index) => (
        <Link key={index} to={`/posts/${post.id}`}>
          <div className="border-2  border-gray-300 w-full max-w-3xl mx-auto p-4 mb-8">
            <div className="flex justify-between">
              <p className="text-gray-500">
                {format(new Date(post.createdAt), "yyyy/MM/dd")}
              </p>
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
                className="line-clamp-2 text-base"
                dangerouslySetInnerHTML={{
                  __html: post.content,
                }}
              ></div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Article;
