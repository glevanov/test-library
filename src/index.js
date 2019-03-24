import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import mockBooks from './books';
import BookList from './components/BookList';
import Menu from './components/Menu';
import AddBook from './components/AddBook';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: mockBooks,
            isModalVisible: false,
        };
        this.addBook = this.addBook.bind(this);
        this.switchModal = this.switchModal.bind(this);
    }

    switchModal(evt) {
        evt.preventDefault();
        this.setState(state => ({
            isModalVisible: !state.isModalVisible,
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
                <Menu switchModal={(evt) => this.switchModal(evt)} />
                <main className="main">
                    <h1>Библиотека</h1>
                    <BookList books={this.state.books} />
                </main>
                {this.state.isModalVisible &&
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
