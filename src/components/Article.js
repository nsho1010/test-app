import React from "react";

const Article = () => {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="border-2  border-gray-300 w-full max-w-3xl mx-auto p-4 mb-8">
        <div className="flex justify-between">
          <p className="text-gray-500">2023/10/10</p>
          <div className="flex mr-8">
            <div className="text-blue-600 border-2  border-blue-600 rounded-md py-[0.2rem] px-[0.4rem] mr-2">
              React
            </div>
            <div className="text-blue-600 border-2  border-blue-600 rounded-md py-[0.2rem] px-[0.4rem] mr-2">
              TypeScript
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mt-2 mb-4">記事タイトル</h2>
          <p>本文です。本文です。本文です。本文です。本文です。本文です。</p>
        </div>
      </div>
    </div>
  );
};

export default Article;
