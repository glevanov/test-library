import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import mockBooks from './books';
import BookList from './components/BookList';
import Menu from './components/Menu';
import AddBook from './components/AddBook';
import InspectBook from './components/InspectBook';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: mockBooks,
            isAddBookVisible: false,
            isInspectBookVisible: false,
            currentBook: {},
        };
        this.addBook = this.addBook.bind(this);
        this.inspectBook = this.inspectBook.bind(this);
        this.updateBook = this.updateBook.bind(this);
        this.switchModal = this.switchModal.bind(this);
    }

    switchModal(evt, modal) {
        evt.preventDefault();
        this.setState(state => ({
            [`is${modal}Visible`]: !state[`is${modal}Visible`],
            })
        );
    }

    addBook(evt, book) {
        evt.preventDefault();
        this.setState((state) => ({
                books: state.books.concat([book]),
            })
        );
    }

    inspectBook(evt, i) {
        evt.preventDefault();
        const book = this.state.books.slice(i, i + 1)[0];
        book.index = i;
        this.setState({currentBook: book});
    }

    updateBook(evt, book, i) {
        this.setState((state) => ({
                books: [].concat(
                    state.books.slice(0, i),
                    [book],
                    state.books.slice(i + 1),
                ),
            })
        );
    }

    render() {
        return (
            <>
                <Menu switchModal={this.switchModal} />
                <main className="main">
                    <h1>Библиотека</h1>
                    <BookList
                        books={this.state.books}
                        switchModal={this.switchModal}
                        inspectBook={this.inspectBook}
                    />
                </main>
                {this.state.isAddBookVisible &&
                    <AddBook
                        addBook={this.addBook}
                        switchModal={this.switchModal}
                    />
                }
                {this.state.isInspectBookVisible &&
                    <InspectBook
                        book={this.state.currentBook}
                        switchModal={this.switchModal}
                        updateBook={this.updateBook}
                />
                }
            </>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root'),
);
