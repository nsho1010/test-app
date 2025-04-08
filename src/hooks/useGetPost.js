import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants";

export const useGetPost = (id) => {
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/posts/${id}`);
        setPost(res.data.post);
      } catch (err) {
        setError("記事の取得に失敗しました。");
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchPost();
    }
  }, [id]);

  return { post, error, isLoading };
};
