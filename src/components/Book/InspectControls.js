import React from 'react';
import PropTypes from 'prop-types';
import Button from "components/Button";

InspectControls.propTypes = {
    toggleEditable: PropTypes.func,
    handleSubmit: PropTypes.func,
    isEditable: PropTypes.bool,
};

export default function InspectControls(props) {
    return (
        <div className="book-edit__buttons">
            <Button
                text="Редактировать книгу"
                onClick={props.toggleEditable}
            />
            <Button
                text="Сохранить изменения"
                type="submit"
                onClick={props.handleSubmit}
                disabled={!props.isEditable}
            />
        </div>
    )
}
