import { postActions } from "@/store/newPostSlice";
import { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Post from "./Post";

import styles from "./PostList.module.css";

type post = {
  description: string;
  name: string;
};

export default function PostList() {
  const [isFetching, setIsFetching] = useState(false);
  const posts = useSelector((state: any) => state.post.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    setIsFetching(true);
    const response = await fetch(
      "https://react-db887-default-rtdb.europe-west1.firebasedatabase.app/posts.json"
    );

    if (!response.ok) {
      return;
    }
    const data = await response.json();
    const newPosts: post[] = [];

    for (const key in data) {
      newPosts.push({
        name: data[key].name,
        description: data[key].description,
      });
    }

    setIsFetching(false);
    dispatch(postActions.fetchPosts(newPosts));
    // console.log("WYsyła?");
  };

  const mappedPosts = posts.map((post: post, index: number) => {
    return <Post description={post.description} name={post.name} key={index} />;
  });

  return (
    <Fragment>
      <ul className={styles.posts}>
        {!isFetching && posts.length > 0 && mappedPosts}
        {!isFetching && posts.length === 0 && (
          <div className={styles["center-info"]}>
            <h2>There are no posts</h2>
            <p>Start adding some!</p>
          </div>
        )}
        {isFetching && (
          <div className={styles["center-info"]}>
            <p>Loading...</p>
          </div>
        )}
      </ul>
    </Fragment>
  );
}
