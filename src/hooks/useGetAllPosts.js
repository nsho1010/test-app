import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants";

export const useGetAllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/posts`);
        setPosts(res.data.posts);
      } catch (err) {
        setError("記事一覧の取得に失敗しました。");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, error, isLoading };
};
