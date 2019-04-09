import React from "react";
import PropTypes from 'prop-types';
import './ImagePreview.css'
import getCover from "js/getCover";

ImagePreview.propTypes = {
    image: PropTypes.string,
    description: PropTypes.string,
};

ImagePreview.defaultProps = {
    description: '',
};

export default function ImagePreview({
        image,
        description,
    }) {
    return (
        <img
            className="image-preview"
            src={getCover(image)}
            alt={description}
        />
    )
}
