import React from "react";

export default class AddBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null,
            cover: null,
            description: null,
            author: null,
            isbn: null,
            year: null,
            rating: 0,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSubmit(evt) {
        const book = {...this.state};
        this.props.addBook(evt, book);
        this.props.switchModal(evt, 'AddBook');
    }

    handleInputChange(evt) {
        const target = evt.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <section className="modal">
                <form
                    className="modal__form"
                    onSubmit={this.handleSubmit}
                >
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
                                type="text"
                                disabled
                            />
                        </label>
                        <label className="modal__label">
                            Описание:
                            <input
                                name="description"
                                className="modal__input"
                                type="text"
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
                            />
                        </label>
                    </fieldset>
                    <div className="modal__buttons-wrap">
                        <button
                            className="modal__button"
                            type="submit"
                        >
                            Добавить
                        </button>
                        <button
                            className="modal__button"
                            type="button"
                            onClick={(evt) => this.props.switchModal(evt, 'AddBook')}
                        >
                            Назад
                        </button>
                    </div>
                </form>
            </section>
        )
    }
}
