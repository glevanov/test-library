import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { getCover} from '../util'
import StarRatingComponent from 'react-star-rating-component';
import AddControls from './AddControls';
import InspectControls from './InspectControls';
import { isYear, isISBN } from '../validation';

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
        this.handleCustomValidity();
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

    handleCustomValidity() {
        const form = document.querySelector('.modal__form');
        const year = form.querySelector('.modal__input[name=year]');
        const isbn = form.querySelector('.modal__input[name=isbn]');

        (!isYear(this.state.book.year))
            ? year.setCustomValidity('Указан неверный год')
            : year.setCustomValidity('');
        (!isISBN(this.state.book.isbn))
            ? isbn.setCustomValidity('Указан неверный ISBN')
            : isbn.setCustomValidity('');
    }

    render() {
        if (this.state.readyToSubmit) {
            return <Redirect to="/" />
        }

        return (
            <section className="modal">
                <h2 className="modal__heading">{this.props.heading}</h2>
                <div className="modal__wrap">
                    <img
                        src={getCover(this.state.book.cover)}
                        alt={this.state.book.description}
                        className="image-preview"
                    />
                    <form
                        className="modal__form"
                        onSubmit={this.handleSubmit}
                    >
                        <fieldset className="modal__fieldset">
                            <label className="modal__label">
                                Название:
                                <input
                                    name="title"
                                    className="modal__input"
                                    type="text"
                                    onChange={this.handleInputChange}
                                    value={this.state.book.title}
                                    required
                                    autoFocus={true}
                                    autoComplete="false"
                                    readOnly={!this.state.isEditable}
                                />
                            </label>
                            <label className="modal__label">
                                Обложка:
                                <input
                                    name="cover"
                                    className="modal__input"
                                    type="file"
                                    onChange={this.handleFileUpload}
                                    disabled={!this.state.isEditable}
                                />
                            </label>
                            <label className="modal__label">
                                Описание:
                                <textarea
                                    name="description"
                                    className="modal__input"
                                    rows="5"
                                    onChange={this.handleInputChange}
                                    value={this.state.book.description}
                                    required
                                    autoComplete="false"
                                    readOnly={!this.state.isEditable}
                                />
                            </label>
                            <label className="modal__label">
                                Автор:
                                <input
                                    name="author"
                                    className="modal__input"
                                    type="text"
                                    onChange={this.handleInputChange}
                                    value={this.state.book.author}
                                    required
                                    autoComplete="false"
                                    readOnly={!this.state.isEditable}
                                />
                            </label>
                            <label className="modal__label">
                                Код ISBN:
                                <input
                                    name="isbn"
                                    className="modal__input"
                                    type="text"
                                    onChange={this.handleInputChange}
                                    value={this.state.book.isbn}
                                    required
                                    autoComplete="false"
                                    readOnly={!this.state.isEditable}
                                />
                            </label>
                            <label className="modal__label">
                                Год издания:
                                <input
                                    name="year"
                                    className="modal__input"
                                    type="number"
                                    step="1"
                                    onChange={this.handleInputChange}
                                    value={this.state.book.year}
                                    required
                                    autoComplete="false"
                                    readOnly={!this.state.isEditable}
                                />
                            </label>
                            <div className="modal__rating">
                                <span>Рейтинг:</span>
                                <StarRatingComponent
                                    className="modal__stars"
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
