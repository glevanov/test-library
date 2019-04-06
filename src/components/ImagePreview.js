import React from "react";
import PropTypes from 'prop-types';
import './ImagePreview.css'
import getCover from "../js/getCover";

ImagePreview.propTypes = {
    image: PropTypes.string,
    description: PropTypes.string,
};

export default function ImagePreview(props) {
    return (
        <img
            className="image-preview"
            src={getCover(props.image)}
            alt={props.description}
        />
    )
}
