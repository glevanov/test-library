import React from "react";

export default function BookList (props) {
    const books = props.books;

    const getCover = (url) => {
        const noCover = require('../nocover.jpg');
        if (!url) {
            return noCover;
        }
        return url;
    };

    const listItems = books.map((book) => (
        <li key={book.isbn}>
            <article className="book">
                <img
                    src={getCover(book.cover)}
                    alt={book.title}
                    width="236"
                    height="360"
                    className="book__thumb"
                />
                <p className="book__title">{book.title}</p>
                <p className="book__rating">{book.rating}/5</p>
            </article>
        </li>
    ));

    return (
        <ul className="feed">{listItems}</ul>
    )
}
