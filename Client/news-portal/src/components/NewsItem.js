import React, { useState } from "react";

function NewsItem({ title, description, url, urlToImage, index }) {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);


  const increaseLike = () => {
    setLike(1);
    setDislike(0);
  };


  const increaseDislike = () => {
    setLike(0);
    setDislike(1);
  };
  return (
    <>
      <h3 className="pt-3">
        <a href={url}>{title}</a>
      </h3>
      <img
        className="pt-3"
        src={urlToImage}
        alt="news"
        height="450px"
        width="1100px"
      />
      <p className="pt-3">{description}</p>
      <div className="row">
        <div className="col-1">
          <p>{like} likes</p>
        </div>
        <div className="col-2">
          <p>{dislike} dislikes</p>
        </div>
      </div>
      <div className="row ml-5">
        <div className="col-1">
          <i
            class="fa fa-thumbs-up"
            aria-hidden="true"
            onClick={increaseLike}
          ></i>{" "}
          Like
        </div>
        <div className="col-2">
          <i
            class="fa fa-thumbs-down"
            aria-hidden="true"
            onClick={increaseDislike}
          ></i>{" "}
          Dislike
        </div>
      </div>
    </>
  );
}

export default NewsItem;
