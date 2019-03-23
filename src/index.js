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
    constructor(props) {
        super(props);
        this.state = {
            title: null,
            cover: null,
            description: null,
            author: null,
            isbn: null,
            year: null,
            rating: 0,
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }


    render() {
        return (
            <div className="add-book">
                <form className="add-book__form">
                    <h2>Добавить книгу</h2>
                    <fieldset className="add-book__fieldset">
                        <label className="add-book__label">
                            Название:
                            <input
                                name="title"
                                className="add-book__input"
                                type="text"
                                onChange={this.handleInputChange}
                                required
                            />
                        </label>
                        <label className="add-book__label">
                            Обложка:
                            <input
                                name="cover"
                                className="add-book__input"
                                type="text"
                                disabled
                            />
                        </label>
                        <label className="add-book__label">
                            Описание:
                            <input
                                name="description"
                                className="add-book__input"
                                type="text"
                                onChange={this.handleInputChange}
                                required
                            />
                        </label>
                        <label className="add-book__label">
                            Автор:
                            <input
                                name="author"
                                className="add-book__input"
                                type="text"
                                onChange={this.handleInputChange}
                                required
                            />
                        </label>
                        <label className="add-book__label">
                            Код ISBN:
                            <input
                                name="isbn"
                                className="add-book__input"
                                type="text"
                                onChange={this.handleInputChange}
                                required
                            />
                        </label>
                        <label className="add-book__label">
                            Год издания:
                            <input
                                name="year"
                                className="add-book__input"
                                type="number"
                                onChange={this.handleInputChange}
                                step="1"
                                required
                            />
                        </label>
                        <label className="add-book__label">
                            Рейтинг:
                            <input
                                name="rating"
                                className="add-book__input"
                                type="number"
                                onChange={this.handleInputChange}
                                min="0"
                                max="5"
                                step="0.1"
                            />
                        </label>
                    </fieldset>
                    <div className="add-book__buttons-wrap">
                        <button
                            className="add-book__button"
                            type="submit"
                        >
                            Добавить
                        </button>
                        <button
                            className="add-book__button"
                            type="button"
                        >
                            Назад
                        </button>
                    </div>
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
