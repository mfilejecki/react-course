import { Fragment, useState } from "react";

import PostList from "@/components/Posts/PostList";
import NewPost from "@/components/Posts/NewPost";

import Modal from "../components/UI/Modal";

export default function HomePage() {
  const [enteredDescription, setEnteredDescription] =
    useState("NextJs jest pogers");

  const getDescriptionHandler = (description: string) => {
    setEnteredDescription(description);
  };

  return (
    <Fragment>
      <Modal>
        <NewPost getDescription={getDescriptionHandler} />
      </Modal>
      <PostList description={enteredDescription} />
    </Fragment>
  );
}
