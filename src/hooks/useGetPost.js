import { useEffect, useState } from "react";
import axios from "axios";

export const useGetPost = (id) => {
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(
          `https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${id}`
        );
        setPost(res.data.post);
      } catch (err) {
        setError("記事の取得に失敗しました。");
      }
    };

    if (id) {
      fetchPost();
    }
  }, [id]);

  return { post, error };
};
