import { Fragment, useState } from "react";

import PostList from "@/components/Posts/PostList";
import MainHeader from "@/components/Header/MainHeader";

export default function HomePage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModalHandler = () => {
    setModalIsOpen(false);
  };

  const showModalHandler = () => {
    setModalIsOpen(true);
  };

  return (
    <Fragment>
      <MainHeader onShowModal={showModalHandler} />
      <main>
        <PostList isPosting={modalIsOpen} closeModal={closeModalHandler} />
      </main>
    </Fragment>
  );
}
