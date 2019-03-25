import React from "react";

export default class InspectBook extends React.Component {
    render() {
        return (
            <section>
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
