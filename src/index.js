import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import mockBooks from './books';

function BookList(props) {
    const books = props.books;

    const getCover = (url) => {
        const noCover = require('./nocover.jpg');
        if (!url) {
            return noCover;
        }
        return url;
    };

    const listItems = books.map((book) => (
        <li>
            <article className="book">
                <img
                    src={getCover(book.cover)}
                    alt={book.title}
                    width="236px"
                    height="360px"
                    className="book__thumb"
                />
                <div className="book__wrap">
                    <p className="book__description book__description--title">{book.title}</p>
                    <p className="book__description book__description--author">{book.author}</p>
                    <p className="book__description">ISIN: {book.isbn}</p>
                    <p className="book__description">Год издания: {book.year}</p>
                    <p className="book__description">Рейтинг: {book.rating}/5</p>
                    <p className="book__description">{book.description}</p>
                </div>
            </article>
        </li>
    ));

    return (
        <ul className="feed">{listItems}</ul>
    )
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: mockBooks,
        };
    }

    render() {
        return (
            <>
                <h1>Библиотека</h1>
                <BookList books={this.state.books} />
            </>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root'),
);
