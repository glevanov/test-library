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
        const data = {...this.state};
        this.props.addBook(evt, data);
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
            <div className="add-book">
                <form
                    className="add-book__form"
                    onSubmit={this.handleSubmit}
                >
                    <h2>Добавить книгу</h2>
                    <fieldset className="add-book__fieldset">
                        <label className="add-book__label">
                            Название:
                            <input
                                name="title"
                                className="add-book__input"
                                type="text"
                                onChange={this.handleInputChange}
                                required
                            />
                        </label>
                        <label className="add-book__label">
                            Обложка:
                            <input
                                name="cover"
                                className="add-book__input"
                                type="text"
                                disabled
                            />
                        </label>
                        <label className="add-book__label">
                            Описание:
                            <input
                                name="description"
                                className="add-book__input"
                                type="text"
                                onChange={this.handleInputChange}
                                required
                            />
                        </label>
                        <label className="add-book__label">
                            Автор:
                            <input
                                name="author"
                                className="add-book__input"
                                type="text"
                                onChange={this.handleInputChange}
                                required
                            />
                        </label>
                        <label className="add-book__label">
                            Код ISBN:
                            <input
                                name="isbn"
                                className="add-book__input"
                                type="text"
                                onChange={this.handleInputChange}
                                required
                            />
                        </label>
                        <label className="add-book__label">
                            Год издания:
                            <input
                                name="year"
                                className="add-book__input"
                                type="number"
                                step="1"
                                onChange={this.handleInputChange}
                                required
                            />
                        </label>
                        <label className="add-book__label">
                            Рейтинг:
                            <input
                                name="rating"
                                className="add-book__input"
                                type="number"
                                min="0"
                                max="5"
                                step="0.1"
                                onChange={this.handleInputChange}
                            />
                        </label>
                    </fieldset>
                    <div className="add-book__buttons-wrap">
                        <button
                            className="add-book__button"
                            type="submit"
                        >
                            Добавить
                        </button>
                        <button
                            className="add-book__button"
                            type="button"
                        >
                            Назад
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}
