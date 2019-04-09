import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

Button.propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    text: PropTypes.string,
};

Button.defaultProps = {
    type: 'button',
    disabled: false,
};

export default function Button({
        type,
        onClick,
        disabled,
        text,
    }) {

    return (
        <button
            className="book-edit__button"
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </button>
    )
}
