import React from "react";

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

    handleSubmit (evt) {
        evt.preventDefault();
        this.setState({
            isEditingEnabled: !this.state.isEditingEnabled
        });
        if (this.state.isEditingEnabled) {
            this.props.updateBook(evt, this.state.updatedBook, this.state.index);
            this.props.switchModal(evt, 'InspectBook');
        }
    }

    render() {
        return (
            <section className="modal">
                <form
                    className="modal__form"
                    onSubmit={this.handleSubmit}
                >
                    <h2>Просмотр и редактирование</h2>
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
                        <label className="modal__label">
                            Рейтинг:
                            <input
                                name="rating"
                                className="modal__input"
                                type="number"
                                min="0"
                                max="5"
                                step="0.1"
                                onChange={this.handleInputChange}
                                value={this.state.updatedBook.rating}
                                disabled={!this.state.isEditingEnabled}
                            />
                        </label>
                    </fieldset>
                    <div className="modal__buttons-wrap">
                        <button
                            className="modal__button"
                            type="submit"
                            onClick={(evt) => this.handleSubmit(evt)}
                        >
                            {this.state.isEditingEnabled ? 'Изменить книгу' : 'Редактировать'}
                        </button>
                        <button
                            className="modal__button"
                            type="button"
                            onClick={(evt) => this.props.switchModal(evt, 'InspectBook')}
                        >
                            Назад
                        </button>
                    </div>
                </form>
            </section>
        )
    }
}
