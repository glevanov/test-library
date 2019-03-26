import React from "react";
import { Redirect } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";
import { getCover } from "../util"

export default class AddBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            updatedBook: {
                title: null,
                cover: null,
                description: "",
                author: null,
                isbn: null,
                year: null,
                rating: 0,
            },
            readyToSubmit: false,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFileUpload = this.handleFileUpload.bind(this);
        this.handleStarClick = this.handleStarClick.bind(this);
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.addBook(evt, this.state.updatedBook);
        this.setState({readyToSubmit: true})
    }

    handleInputChange(evt) {
        const target = evt.target;
        const value = target.value;
        const name = target.name;

        this.setState(state => ({
            updatedBook: {
                ...state.updatedBook,
                [name]: value
            }
        }));
    }

    handleFileUpload(evt) {
        const file = evt.target.files[0];
        const reader = new FileReader();

        reader.addEventListener("load", () => {
            this.setState(state => ({
                updatedBook: {
                    ...state.updatedBook,
                    cover: reader.result,
                }
            }));
        }, false);
        reader.readAsDataURL(file);
    }

    handleStarClick(newValue) {
        this.setState(state => ({
            updatedBook: {
                ...state.updatedBook,
                rating: newValue,
            }
        }));
    }

    render() {
        if (this.state.readyToSubmit) {
            return <Redirect to="/" />
        }

        return (
            <section className="modal">
                <form
                    className="modal__form"
                    onSubmit={this.handleSubmit}
                >
                    <img
                        src={getCover(this.state.updatedBook.cover)}
                        alt={this.state.updatedBook.description}
                        className="image-preview"
                    />
                    <h2>Добавить книгу</h2>
                    <fieldset className="modal__fieldset">
                        <label className="modal__label">
                            Название:
                            <input
                                name="title"
                                className="modal__input"
                                type="text"
                                onChange={this.handleInputChange}
                                required
                            />
                        </label>
                        <label className="modal__label">
                            Обложка:
                            <input
                                name="cover"
                                className="modal__input"
                                type="file"
                                onChange={this.handleFileUpload}
                            />
                        </label>
                        <label className="modal__label">
                            Описание:
                            <textarea
                                name="description"
                                className="modal__input"
                                rows="5"
                                onChange={this.handleInputChange}
                                required
                            />
                        </label>
                        <label className="modal__label">
                            Автор:
                            <input
                                name="author"
                                className="modal__input"
                                type="text"
                                onChange={this.handleInputChange}
                                required
                            />
                        </label>
                        <label className="modal__label">
                            Код ISBN:
                            <input
                                name="isbn"
                                className="modal__input"
                                type="text"
                                onChange={this.handleInputChange}
                                required
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
                                required
                            />
                        </label>
                        <p className="modal__rating">
                            <span>Рейтинг:</span>
                            <StarRatingComponent
                                className="modal__stars"
                                name="rating"
                                starCount={5}
                                onStarClick={this.handleStarClick}
                            />
                        </p>
                    </fieldset>
                    <button
                        className="modal__button"
                        type="submit"
                    >
                        Добавить
                    </button>
                </form>
            </section>
        )
    }
}
