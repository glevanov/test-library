import React from 'react';
import PropTypes from 'prop-types';
import './BookList.css';
import { Link } from 'react-router-dom';
import ImagePreview from 'components/ImagePreview';
import StarRatingComponent from 'react-star-rating-component';
import Button from "components/Button";

BookList.propTypes = {
    books: PropTypes.array,
    inspectBook: PropTypes.func,
};

Button.defaultProps = {
    books: [],
};

export default function BookList(props) {
    const {
        books,
        inspectBook,
    } = props;

    const listItems = books.map((book, i) => (
        <li key={book.isbn}>
            <article className="book">
                <Link
                    className="book__link"
                    to="/inspect"
                    /* TODO как бы выпилить стрелочную функцию? */
                    onClick={() => inspectBook(i)}
                >
                    <ImagePreview
                        image={book.cover}
                        description={book.title}
                    />
                </Link>
                <p className="book__title">{book.title}</p>
                <StarRatingComponent
                    className="book__rating"
                    name="rating"
                    starCount={5}
                    editable={false}
                    value={book.rating}
                />
            </article>
        </li>
    ));

    return (
        <section>
            <h2>Список книг</h2>
            <ul className="feed">{listItems}</ul>
        </section>
    )
}
