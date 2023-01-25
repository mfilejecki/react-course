import { Fragment } from "react";

import PostList from "@/components/Posts/PostList";

export default function HomePage() {
  return (
    <Fragment>
      <head>
        <title>NextJS simple posts app</title>
        <meta
          name="description"
          content="Small nextJS + ts application for creating posts"
        />
      </head>
      <main>
        <PostList />
      </main>
    </Fragment>
  );
}
