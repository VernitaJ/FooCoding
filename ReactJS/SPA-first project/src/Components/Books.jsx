import React, { useState } from "react";

const Books = props => {
  const [liked, setLiked] = useState();
  console.log(props);

  return (
    <div>
      {props.length > 0 ? (
        props.map(book => (
          <div key={book.isbn}>
            <h2>{book.title}</h2>
            <img src={book.url} alt={book.alt} />
            <h5>ISBN: {book.isbn}</h5>
            <p>{book.text}</p>
            <button title="Like" />
          </div>
        ))
      ) : (
        <div>
          <h2>Nothing to see here!</h2>
        </div>
      )}
    </div>
  );
};

export default Books;
