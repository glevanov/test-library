import React from 'react';
import {render} from 'react-dom';
import './index.css';
import mockBooks from './books';
import Root from './components/Root';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import InspectBook from "./components/InspectBook";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: mockBooks,
            currentBook: {},
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
            <Router>
                <Root>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={() => <BookList
                                books={this.state.books}
                                inspectBook={this.inspectBook}
                            />}
                        />
                        <Route
                            path="/add/"
                            render={() => <AddBook
                                addBook={this.addBook}
                            />}
                        />
                        <Route
                            path="/inspect/"
                            render={() => <InspectBook
                                book={this.state.currentBook}
                                updateBook={this.updateBook}
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
