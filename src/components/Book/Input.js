import React from 'react';
import PropTypes from 'prop-types';

Input.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    rows: PropTypes.number,
    step: PropTypes.number,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    required: PropTypes.bool,
    autoFocus: PropTypes.bool,
    autoComplete: PropTypes.bool,
    readOnly: PropTypes.bool,
    disabled: PropTypes.bool,
};

Input.defaultProps = {
    type: 'text',
    autoComplete: false,
};

export default function Input(
    {
        label,
        name,
        type,
        rows,
        step,
        onChange,
        value,
        required,
        autoFocus,
        autoComplete,
        readOnly,
        disabled,
    }) {

    const isTextarea = (type === 'textarea');
    const TagType = `${(isTextarea) ? 'textarea' : 'input'}`;

    return (
        <label className="book-edit__label">
            {`${label}:`}
            <TagType
                name={name}
                className="book-edit__input"
                type={(isTextarea) ? undefined : type}
                rows={`${rows}`}
                step={`${step}`}
                onChange={onChange}
                value={value}
                required={required}
                autoFocus={autoFocus}
                autoComplete={`${autoComplete}`}
                readOnly={readOnly}
                disabled={disabled}
            />
        </label>
    )
}
