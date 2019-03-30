import React from 'react';
import PropTypes from 'prop-types';
import { getCover} from '../js/util';
import { Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';

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
}

BookList.propTypes = {
    books: PropTypes.array,
    inspectBook: PropTypes.func,
};
