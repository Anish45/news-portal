import React from "react";
import { Redirect } from "react-router-dom";
import NewsList from "../components/NewsList";

function Home({ authorized }) {
  if (authorized === false) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <NewsList />
    </>
  );
}

export default Home;
