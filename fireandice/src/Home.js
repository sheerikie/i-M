import React, { useState, useEffect } from "react";
import axios from "axios";
import BookDetails from "./BookDetails";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Home() {
  const [books, setBooks] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      "https://www.anapioficeandfire.com/api/books?pageSize=30"
    );

    setBooks(response.data);
  };
  console.log(books);
  return (
    <Router>
      <div className="Home" style={{ justifyContent: "center" }}>
        <h1>Game of Thrones Books</h1>
        <h2>Fetch a list from an API and display it</h2>
        {/* Fetch data from API */}
        <div>
          <button className="fetch-button" onClick={fetchData}>
            Fetch Data
          </button>
          <br />
        </div>
        {/* Display data from API */}
        <div className="books">
          {books &&
            books.map((book, index) => {
              const cleanedDate = new Date(book.released).toDateString();
              const authors = book.authors.join(", ");
              const characters = book.characters.join(", ");

              return (
                <div className="book container" key={index}>
                  <h3>Book {index + 1}</h3>
                  <h2>{book.name}</h2>

                  <div className="details">
                    <BookDetails
                      book={book}
                      authors={authors}
                      cleanedDate={cleanedDate}
                      index={index}
                      characters={characters}
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      ;
    </Router>
  );
}
export default Home;
