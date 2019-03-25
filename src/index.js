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
        };
        this.addBook = this.addBook.bind(this);
        this.switchModal = this.switchModal.bind(this);
    }

    switchModal(evt, modal) {
        evt.preventDefault();
        this.setState(state => ({
            [`is${modal}Visible`]: !state[`is${modal}Visible`],
            })
        )
    }

    addBook(evt, book) {
        evt.preventDefault();
        this.setState((state) => ({
                books: state.books.concat([book]),
            })
        );
    }

    render() {
        return (
            <>
                <Menu switchModal={this.switchModal} />
                <main className="main">
                    <h1>Библиотека</h1>
                    <BookList books={this.state.books} />
                </main>
                {this.state.isAddBookVisible &&
                    <AddBook
                        addBook={this.addBook}
                        switchModal={this.switchModal}
                    />
                }
                {this.state.isInspectBookVisible &&
                <AddBook
                    addBook={this.addBook}
                    switchModal={this.switchModal}
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
