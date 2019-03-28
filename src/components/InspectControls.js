import React from 'react';
import PropTypes from 'prop-types';

export default class InspectControls extends React.Component {
    render() {
        return (
            <div className="modal__buttons-wrap">
                <button
                    className="modal__button"
                    type="button"
                    onClick={this.props.toggleEditable}
                >
                    Редактировать книгу
                </button>
                <button
                    className="modal__button"
                    type="submit"
                    onClick={(evt) => this.props.handleSubmit(evt)}
                    disabled={!this.props.isEditable}
                >
                    Сохранить изменения
                </button>
            </div>
        )
    }
}

InspectControls.propTypes = {
    toggleEditable: PropTypes.func,
    handleSubmit: PropTypes.func,
    isEditable: PropTypes.bool,
};
