import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function BookDetails(props) {
  const [readMore, setReadMore] = useState(false);
  const [characterMore, setCharacterMore] = useState(false);
  const book = props.book;
  const cleanedDate = props.cleanedDate;
  const authors = props.authors;
  const linkName = readMore ? "Read Less << " : "Read More >> ";
  const characterLink = characterMore
    ? "View Less Characters << "
    : "View More Characters >> ";
  const extraContent = (
    <div>
      <p>⏰: {cleanedDate}</p>
      <p>👨: {book.publisher}</p>
      <p>📖: {book.released}</p>
      <p>🏘️: {book.url}</p>
      <p>⏰: {cleanedDate}</p>
      <p>👨: {book.povCharacters}</p>
      <p>📖: {book.mediaType}</p>
      <p>🏘️: {book.isbn}</p>
    </div>
  );
  let characters = book.characters,
    result = [];
  for (let i in characters) {
    result.push({ key: i + 1, character: characters[i] });
  }
  console.log(result);
  const characterContent = (
    <div>
      <div className="characters">
        {result.map((e) => (
          <p>
            <Link
              to={{
                pathname: `/character/${e.key}`,
                state: e.character,
              }}
              target="_blank"
            >
              {e.character}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
  return (
    <Router>
      <div className="details">
        <p>📖: {book.name}</p>
        <p>👨: {authors}</p>
        <p>📖: {book.numberOfPages} pages</p>
        <p>🏘️: {book.country}</p>
        <a
          className="read-more-link"
          onClick={() => {
            setReadMore(!readMore);
          }}
        >
          <h2>{linkName}</h2>
        </a>
        {readMore && extraContent}
        <a
          className="character-more-link"
          onClick={() => {
            setCharacterMore(!characterMore);
          }}
        >
          <h2>{characterLink}</h2>
        </a>
        {characterMore && characterContent}
      </div>
    </Router>
  );
}
export default BookDetails;
