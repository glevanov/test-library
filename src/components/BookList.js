import React from "react";
import { getCover} from "../util";
import { Link } from "react-router-dom";

export default class BookList extends React.Component {
    render() {
        const listItems = this.props.books.map((book, i) => (
            <li key={book.isbn}>
                <article className="book">
                    <Link
                        className="book__link"
                        to="/inspect"
                        onClick={() => this.props.inspectBook(i)}
                    >
                        <img
                            src={getCover(book.cover)}
                            alt={book.title}
                            width="236"
                            height="360"
                            className="book__thumb"
                        />
                        <p className="book__title">{book.title}</p>
                        <p className="book__rating">{book.rating}/5</p>
                    </Link>
                </article>
            </li>
        ));

        return (
            <ul className="feed">{listItems}</ul>
        )
    }
}
