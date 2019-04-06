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

export default function Button(props) {
    const {
        type,
        onClick,
        disabled,
        text,
    } = props;

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
