import React from "react";
import Faker from "faker";

const PostItem = ({ title, body, postId, onShowComments }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        marginBottom: "5px",
        display: "flex",
        padding: 15
      }}
    >
      <div>
        <img
          src={`${Faker.internet.avatar()}`}
          alt="user"
          style={{
            borderRadius: "50%",
            width: "100",
            height: "auto"
          }}
        />
        <p>{Faker.name.firstName()}</p>
      </div>
      <div style={{ width: "100%" }}>
        <h4 style={{ fontWeight: "bold" }}>{title}</h4>
        <p>{body}</p>
        <div style={{ position: "relative" }}>
          <button
            onClick={() => onShowComments(postId)}
            style={{ position: "absolute" }}
          >
            Show Comments
          </button>
        </div>
        <div />
      </div>
    </div>
  );
};

export default PostItem;
