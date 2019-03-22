import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import mockBooks from './books';

function AddBook(props) {
    return (
        <li
            key={'add book'}
            className="book-add"
        >
            <a href="#">Добавить книгу</a>
        </li>
    )
}

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
                <p className="book__author">{book.author}</p>
            </article>
        </li>
    ))
        .concat(<AddBook />);

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
