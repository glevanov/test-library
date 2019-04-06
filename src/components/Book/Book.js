import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import './Book.css';
import StarRatingComponent from 'react-star-rating-component';
import ImagePreview from 'components/ImagePreview';
import AddControls from './AddControls';
import InspectControls from './InspectControls';
import { isYear, isISBN } from 'js/validation';

export default class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditable: this.props.isEditable,
            readyToSubmit: false,
            book: {
                title: this.props.book.title,
                cover: this.props.book.cover,
                description: this.props.book.description,
                author: this.props.book.author,
                isbn: this.props.book.isbn,
                year: this.props.book.year,
                rating: this.props.book.rating,
            }
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleEditable = this.toggleEditable.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStarClick = this.handleStarClick.bind(this);
        this.handleFileUpload = this.handleFileUpload.bind(this);
    }

    handleSubmit(evt) {
        evt.preventDefault();
        if (this.props.mode === 'add') {
            this.props.addBook(evt, this.state.book);
        } else {
            this.props.updateBook(evt, this.state.book);
        }
        this.setState({readyToSubmit: true})
    }

    toggleEditable() {
        this.setState({
            isEditable: !this.state.isEditable
        });
    }

    handleInputChange(evt) {
        const target = evt.target;
        const name = target.name;
        const value = (name === 'isbn')
            ? target.value.replace(/-/g, "").trim()
            : target.value;

        this.setState(state => ({
            book: {
                ...state.book,
                [name]: value,
            }
        }));
        Book.handleCustomValidity();
    }

    handleStarClick(newValue) {
        this.setState(state => ({
            book: {
                ...state.book,
                rating: newValue,
            }
        }));
    }

    handleFileUpload(evt) {
        const file = evt.target.files[0];
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            if (file.type.startsWith('image/')) {
                this.setState(state => ({
                    book: {
                        ...state.book,
                        cover: reader.result,
                    }
                }));
            }
        }, false);
        reader.readAsDataURL(file);
    }

    static handleCustomValidity() {
        const form = document.querySelector('.book-edit__form');
        const year = form.querySelector('.book-edit__input[name=year]');
        const isbn = form.querySelector('.book-edit__input[name=isbn]');

        (!isYear(year.value))
            ? year.setCustomValidity('Указан неверный год')
            : year.setCustomValidity('');
        (!isISBN(isbn.value))
            ? isbn.setCustomValidity('Указан неверный ISBN')
            : isbn.setCustomValidity('');
    }

    render() {
        if (this.state.readyToSubmit) {
            return <Redirect to="/" />
        }

        return (
            <section className="book-edit">
                <h2 className="book-edit__heading">{this.props.heading}</h2>
                <div className="book-edit__wrap">
                    <ImagePreview
                        image={this.state.book.cover}
                        description={this.state.book.description}
                    />
                    <form
                        className="book-edit__form"
                        onSubmit={this.handleSubmit}
                    >
                        <fieldset className="book-edit__fieldset">
                            <label className="book-edit__label">
                                Название:
                                <input
                                    name="title"
                                    className="book-edit__input"
                                    type="text"
                                    onChange={this.handleInputChange}
                                    value={this.state.book.title}
                                    required
                                    autoFocus={true}
                                    autoComplete="false"
                                    readOnly={!this.state.isEditable}
                                />
                            </label>
                            <label className="book-edit__label">
                                Обложка:
                                <input
                                    name="cover"
                                    className="book-edit__input"
                                    type="file"
                                    onChange={this.handleFileUpload}
                                    disabled={!this.state.isEditable}
                                />
                            </label>
                            <label className="book-edit__label">
                                Описание:
                                <textarea
                                    name="description"
                                    className="book-edit__input"
                                    rows="5"
                                    onChange={this.handleInputChange}
                                    value={this.state.book.description}
                                    required
                                    autoComplete="false"
                                    readOnly={!this.state.isEditable}
                                />
                            </label>
                            <label className="book-edit__label">
                                Автор:
                                <input
                                    name="author"
                                    className="book-edit__input"
                                    type="text"
                                    onChange={this.handleInputChange}
                                    value={this.state.book.author}
                                    required
                                    autoComplete="false"
                                    readOnly={!this.state.isEditable}
                                />
                            </label>
                            <label className="book-edit__label">
                                Код ISBN:
                                <input
                                    name="isbn"
                                    className="book-edit__input"
                                    type="text"
                                    onChange={this.handleInputChange}
                                    value={this.state.book.isbn}
                                    required
                                    autoComplete="false"
                                    readOnly={!this.state.isEditable}
                                />
                            </label>
                            <label className="book-edit__label">
                                Год издания:
                                <input
                                    name="year"
                                    className="book-edit__input"
                                    type="number"
                                    step="1"
                                    onChange={this.handleInputChange}
                                    value={this.state.book.year}
                                    required
                                    autoComplete="false"
                                    readOnly={!this.state.isEditable}
                                />
                            </label>
                            <div className="book-edit__rating">
                                <span>Рейтинг:</span>
                                <StarRatingComponent
                                    className="book-edit__stars"
                                    name="rating"
                                    starCount={5}
                                    editing={this.state.isEditable}
                                    value={this.state.book.rating}
                                    onStarClick={this.handleStarClick}
                                    disabled={!this.state.isEditable}
                                />
                            </div>
                        </fieldset>
                        {this.props.mode === 'add'
                            ? <AddControls />
                            : <InspectControls
                                toggleEditable={this.toggleEditable}
                                handleSubmit={this.handleSubmit}
                                isEditable={this.state.isEditable}
                            />
                        }
                    </form>
                </div>
            </section>
        )
    }
}

Book.propTypes = {
    book: PropTypes.object,
    addBook: PropTypes.func,
    heading: PropTypes.string,
    isEditable: PropTypes.bool,
    mode: PropTypes.string,
};
