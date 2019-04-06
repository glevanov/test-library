import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import emptyBook from 'js/emptyBook';
import mockBooks from 'js/books';
import Root from 'components/Root';
import Book from 'components/Book';
import BookList from 'components/BookList';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: mockBooks,
            currentBook: {},
            currentIndex: null,
        };
        this.addBook = this.addBook.bind(this);
        this.inspectBook = this.inspectBook.bind(this);
        this.updateBook = this.updateBook.bind(this);
    }

    addBook(evt, book) {
        evt.preventDefault();
        this.setState((state) => ({
                books: state.books.concat([book]),
            })
        );
    }

    inspectBook(i) {
        const book = this.state.books.slice(i, i + 1)[0];
        this.setState({currentIndex: i});
        this.setState({currentBook: book});
    }

    updateBook(evt, book) {
        this.setState((state) => ({
                books: [].concat(
                    state.books.slice(0, this.state.currentIndex),
                    [book],
                    state.books.slice(this.state.currentIndex + 1),
                ),
            })
        );
    }

    render() {
        return (
            <Router>
                <Root>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={() => <BookList
                                books={this.state.books}
                                inspectBook={this.inspectBook}
                                mode={'inspect'}
                            />}
                        />
                        <Route
                            path="/add/"
                            render={() => <Book
                                book={emptyBook}
                                addBook={this.addBook}
                                heading={'Добавить книгу'}
                                isEditable={true}
                                mode={'add'}
                            />}
                        />
                        <Route
                            path="/inspect/"
                            render={() => <Book
                                book={this.state.currentBook}
                                updateBook={this.updateBook}
                                heading={'Просмотр и редактирование'}
                                isEditable={false}
                            />}
                        />
                    </Switch>
                </Root>
            </Router>
        );
    }
}

render(
    <App />,
    document.getElementById('root'),
);
