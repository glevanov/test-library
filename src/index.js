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

class Menu extends React.Component {
    render() {
        return (
            <header className="header">
                <nav className="menu">
                    <ul className="menu__list">
                        <li>
                            <a
                                className="menu__button"
                                href="./"
                            >
                                Главная
                            </a>
                        </li>
                        <li>
                            <a
                                className="menu__button"
                                href="./bookadd.html"
                                onClick={(e) => this.props.onAddClick(e)}
                            >
                                Добавить книгу
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

class AddBook extends React.Component {
    render() {
        return (
            <div className="add-book">
                <form className="add-book__form">
                    <h2>Добавить книгу</h2>
                    <fieldset className="add-book__fieldset">
                        <label className="add-book__label">
                            Название:
                            <input type="text"/>
                        </label>
                        <label className="add-book__label">
                            Обложка:
                            <input type="text"/>
                        </label>
                        <label className="add-book__label">
                            Описание:
                            <input type="text"/>
                        </label>
                        <label className="add-book__label">
                            Автор:
                            <input type="text"/>
                        </label>
                        <label className="add-book__label">
                            Код ISBN:
                            <input type="text"/>
                        </label>
                        <label className="add-book__label">
                            Год издания:
                            <input type="text"/>
                        </label>
                        <label className="add-book__label">
                            Рейтинг:
                            <input type="text"/>
                        </label>
                    </fieldset>
                </form>
            </div>
        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: mockBooks,
            isModalVisible: false,
        };
    }

    onAddClick(e) {
        e.preventDefault();
        this.setState(state => ({
            isModalVisible: !state.isModalVisible,
            })
        )
    }

    render() {
        return (
            <>
                <Menu onAddClick={(e) => this.onAddClick(e)} />
                <main className="main">
                    <h1>Библиотека</h1>
                    <BookList books={this.state.books} />
                </main>
                <AddBook />
            </>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root'),
);
