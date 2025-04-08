import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-center items-start w-4/5 mx-auto mt-10">
      <form className="w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-8">問い合わせフォーム</h2>

        {/* お名前 */}
        <div className="mb-6 grid grid-cols-4 items-center gap-4">
          <label htmlFor="name" className="text-lg col-span-1">
            お名前
          </label>
          <input
            id="name"
            className="col-span-3 border border-gray-300 rounded-lg px-4 py-2 w-full"
          />
        </div>

        {/* メールアドレス */}
        <div className="mb-6 grid grid-cols-4 items-center gap-4">
          <label htmlFor="email" className="text-lg col-span-1">
            メールアドレス
          </label>
          <input
            id="email"
            className="col-span-3 border border-gray-300 rounded-lg px-4 py-2 w-full"
          />
        </div>

        {/* 本文 */}
        <div className="mb-6 grid grid-cols-4 items-start gap-4">
          <label htmlFor="detail" className="text-lg col-span-1 mt-2">
            本文
          </label>
          <textarea
            id="detail"
            rows={6}
            className="col-span-3 border border-gray-300 rounded-lg px-4 py-2 w-full"
          />
        </div>

        {/* ボタン */}
        <div className="flex justify-center mt-8">
          <button className="bg-gray-800 font-bold text-white rounded-lg px-6 py-2 text-lg mr-4">
            送信
          </button>
          <button className="bg-gray-200 font-bold rounded-lg px-6 py-2 text-lg">
            クリア
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
