import { Fragment, useState } from "react";

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
  const { isPosting, closeModal } = props;

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
        {posts.length > 0 && mappedPosts}
        {posts.length === 0 && (
          <div className={styles["center-info"]}>
            <h2>There are no posts</h2>
            <p>Start adding some!</p>
          </div>
        )}
      </ul>
    </Fragment>
  );
}
