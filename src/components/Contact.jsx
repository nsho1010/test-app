import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-start w-4/5 mx-auto mt-10">
      <form className="w-full max-w-2xl" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-2xl font-bold mb-8">問い合わせフォーム</h2>

        {/* お名前 */}
        <div className="mb-6 grid grid-cols-4 items-start gap-4">
          <label htmlFor="name" className="text-lg col-span-1 mt-2">
            お名前
          </label>
          <div className="col-span-3">
            <input
              id="name"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              {...register("name", {
                required: "お名前は必須です",
                maxLength: {
                  value: 30,
                  message: "30文字以内で入力してください。",
                },
              })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
        </div>

        {/* メールアドレス */}
        <div className="mb-6 grid grid-cols-4 items-start gap-4">
          <label htmlFor="email" className="text-lg col-span-1 mt-2">
            メールアドレス
          </label>
          <div className="col-span-3">
            <input
              id="email"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              {...register("email", {
                required: "メールアドレスは必須です",
                pattern: {
                  value: /^[\w.\-]+@[a-zA-Z\d\-.]+\.[a-zA-Z]{2,}$/,
                  message: "正しいメールアドレス形式で入力してください",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        {/* 本文 */}
        <div className="mb-6 grid grid-cols-4 items-start gap-4">
          <label htmlFor="detail" className="text-lg col-span-1 mt-2">
            本文
          </label>
          <div className="col-span-3">
            <textarea
              id="detail"
              rows={6}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              {...register("detail", {
                maxLength: {
                  value: 500,
                  message: "500文字以内で入力してください",
                },
              })}
            />
            {errors.detail && (
              <p className="text-red-500 text-sm mt-1">
                {errors.detail.message}
              </p>
            )}
          </div>
        </div>

        {/* ボタン */}
        <div className="flex justify-center mt-8 col-span-4">
          <button
            type="submit"
            className="bg-gray-800 font-bold text-white rounded-lg px-6 py-2 text-lg mr-4"
          >
            送信
          </button>
          <button
            type="reset"
            className="bg-gray-200 font-bold rounded-lg px-6 py-2 text-lg"
          >
            クリア
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
