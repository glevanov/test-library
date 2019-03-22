import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import mockBooks from './books';

function BookList(props) {
    const books = props.books;
    const noCover = require('./nocover.jpg');

    const listItems = books.map((book) => (
        <li>
            <article className="book">
                <img src={noCover} alt={book.title}/>
                <p className="book__description book__description--title">{book.title}</p>
                <p className="book__description book__description--author">{book.author}</p>
                <p className="book__description">{book.isbn}</p>
                <p className="book__description">{book.year}</p>
                <p className="book__description">{book.rating}</p>
                <p className="book__description">{book.description}</p>
            </article>
        </li>
    ));

    return (
        <ul>{listItems}</ul>
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
