import React from "react";

export default function InspectControls(props) {
    return (
        <div className="modal__buttons-wrap">
            <button
                className="modal__button"
                type="button"
                onClick={props.toggleEditable}
            >
                Редактировать книгу
            </button>
            <button
                className="modal__button"
                type="submit"
                onClick={(evt) => props.handleSubmit(evt)}
                disabled={!props.isEditable}
            >
                Сохранить изменения
            </button>
        </div>
    )
}
