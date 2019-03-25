import React from "react";

export default class BookList extends React.Component {
    static getCover (url) {
        const noCover = require('../nocover.jpg');
        if (!url) {
            return noCover;
        }
        return url;
    };

    handleClick (evt, i) {
        evt.preventDefault();
        this.props.switchModal(evt, 'InspectBook');
        this.props.inspectBook(evt, i);
    };

    render() {
        const listItems = this.props.books.map((book, i) => (
            <li
                key={book.isbn}
                onClick={(evt) => this.handleClick(evt, i)}
            >
                <article className="book">
                    <a
                        href={`./${book.isbn}.html`}
                        className="book__link"
                    >
                        <img
                            src={BookList.getCover(book.cover)}
                            alt={book.title}
                            width="236"
                            height="360"
                            className="book__thumb"
                        />
                        <p className="book__title">{book.title}</p>
                        <p className="book__rating">{book.rating}/5</p>
                    </a>
                </article>
            </li>
        ));

        return (
            <ul className="feed">{listItems}</ul>
        )
    }
}
