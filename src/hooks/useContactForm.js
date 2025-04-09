import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants";

export const useContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const res = await axios.post(
        `${BASE_URL}/contacts`,
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

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    reset,
    onSubmit,
  };
};
