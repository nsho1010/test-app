import { useEffect, useState } from "react";
import axios from "axios";

const API_URL =
  "https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts";

export const useGetAllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(API_URL);
        setPosts(res.data.posts);
      } catch (err) {
        setError("記事一覧の取得に失敗しました。");
      }
    };

    fetchPosts();
  }, []);

  return { posts, error };
};
