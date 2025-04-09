import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const res = await axios.post(
        "https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/contacts",
        {
          name: data.name,
          email: data.email,
          message: data.detail,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.status === 200) {
        alert("お問い合わせを送信しました。ありがとうございます！");
        reset();
      } else {
        alert("送信に失敗しました。時間をおいて再度お試しください。");
      }
    } catch (error) {
      console.error("送信エラー:", error);
      alert("エラーが発生しました。ネットワークをご確認ください。");
    } finally {
      setIsSubmitting(false);
    }
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
              disabled={isSubmitting}
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
              disabled={isSubmitting}
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
              disabled={isSubmitting}
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
            className={`bg-gray-800 text-white px-6 py-2 rounded-lg font-bold text-lg mr-4 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isSubmitting}
          >
            送信
          </button>
          <button
            type="button"
            onClick={() => reset()}
            className={`bg-gray-200 font-bold rounded-lg px-6 py-2 text-lg ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isSubmitting}
          >
            クリア
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
