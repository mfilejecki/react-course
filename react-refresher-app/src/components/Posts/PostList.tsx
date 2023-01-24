import { Fragment, useState, useEffect } from "react";

import Post from "./Post";
import Modal from "../UI/Modal";
import NewPost from "./NewPost";

import styles from "./PostList.module.css";

type Props = {
  isPosting: boolean;
  closeModal: () => void;
};

type post = {
  description: string;
  name: string;
};

export default function PostList(props: Props) {
  const [posts, setPosts] = useState<post[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const { isPosting, closeModal } = props;

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
    setPosts(newPosts);
  };

  const getPosterDataHandler = (data: post) => {
    setPosts((prevState) => {
      return [data, ...prevState];
    });
  };

  const mappedPosts = posts.map((post: post, index: number) => {
    return <Post description={post.description} name={post.name} key={index} />;
  });

  return (
    <Fragment>
      {isPosting && (
        <Modal onCloseModal={closeModal}>
          <NewPost onCancel={closeModal} onAddPost={getPosterDataHandler} />
        </Modal>
      )}
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
