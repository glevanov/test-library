import React from "react";
import { getCover} from "../util";
import StarRatingComponent from 'react-star-rating-component';

export default class InspectBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditingEnabled: false,
            index: this.props.book.index,
            updatedBook: {
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
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStarClick = this.handleStarClick.bind(this);
        this.switchEditingEnabled = this.switchEditingEnabled.bind(this);
    }

    handleInputChange(evt) {
        const target = evt.target;
        const value = target.value;
        const name = target.name;

        this.setState(state => ({
            updatedBook: {
                ...state.updatedBook,
                [name]: value,
            }
        }));
    }

    handleStarClick(newValue) {
        this.setState(state => ({
            updatedBook: {
                ...state.updatedBook,
                rating: newValue,
            }
        }));
    }

    handleSubmit (evt) {
        evt.preventDefault();
        this.props.updateBook(evt, this.state.updatedBook, this.state.index);
    }

    switchEditingEnabled() {
        this.setState({
            isEditingEnabled: !this.state.isEditingEnabled
        });
    }

    render() {
        return (
            <section className="modal">
                <h2 className="modal__heading">Просмотр и редактирование</h2>
                <div className="modal__wrap">
                    <img
                        src={getCover(this.state.updatedBook.cover)}
                        alt={this.state.updatedBook.title}
                        width="236"
                        height="360"
                        className="modal__thumb"
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
                                    value={this.state.updatedBook.title}
                                    required
                                    disabled={!this.state.isEditingEnabled}
                                />
                            </label>
                            <label className="modal__label">
                                Обложка:
                                <input
                                    name="cover"
                                    className="modal__input"
                                    type="text"
                                    disabled
                                />
                            </label>
                            <label className="modal__label">
                                Описание:
                                <textarea
                                    name="description"
                                    className="modal__input"
                                    rows="5"
                                    onChange={this.handleInputChange}
                                    value={this.state.updatedBook.description}
                                    required
                                    disabled={!this.state.isEditingEnabled}
                                />
                            </label>
                            <label className="modal__label">
                                Автор:
                                <input
                                    name="author"
                                    className="modal__input"
                                    type="text"
                                    onChange={this.handleInputChange}
                                    value={this.state.updatedBook.author}
                                    required
                                    disabled={!this.state.isEditingEnabled}
                                />
                            </label>
                            <label className="modal__label">
                                Код ISBN:
                                <input
                                    name="isbn"
                                    className="modal__input"
                                    type="text"
                                    onChange={this.handleInputChange}
                                    value={this.state.updatedBook.isbn}
                                    required
                                    disabled={!this.state.isEditingEnabled}
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
                                    value={this.state.updatedBook.year}
                                    required
                                    disabled={!this.state.isEditingEnabled}
                                />
                            </label>
                            <p className="modal__rating">
                                <span>Рейтинг:</span>
                                <StarRatingComponent
                                    className="modal__stars"
                                    name="rating"
                                    starCount={5}
                                    editing={this.state.isEditingEnabled}
                                    value={this.state.updatedBook.rating}
                                    onStarClick={this.handleStarClick}
                                />
                            </p>
                        </fieldset>
                        <div className="modal__buttons-wrap">
                            <button
                                className="modal__button"
                                type="button"
                                onClick={this.switchEditingEnabled}
                            >
                                Редактировать книгу
                            </button>
                            <button
                                className="modal__button"
                                type="submit"
                                onClick={(evt) => this.handleSubmit(evt)}
                                disabled={!this.state.isEditingEnabled}
                            >
                                Сохранить изменения
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}
