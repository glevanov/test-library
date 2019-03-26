import React from "react";
import { getCover} from "../util";
import { Link } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";

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
                            className="book__thumb image-preview"
                        />
                        <p className="book__title">{book.title}</p>
                        <StarRatingComponent
                            className="book__rating"
                            name="rating"
                            starCount={5}
                            editable={false}
                            value={book.rating}
                        />
                    </Link>
                </article>
            </li>
        ));

        return (
            <ul className="feed">{listItems}</ul>
        )
    }
}
