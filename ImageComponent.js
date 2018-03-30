import React from 'react';
import PropTypes from "prop-types";

const ImageComponent = ({ src, alt = 'text' }) => {

    return (
        <div>
            <img src={src} alt={alt} />
        </div>
    )
};

ImageComponent.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string
};

const TextComponent = (props) => {
    const { style, text } = props;
    return (
        <div>
            <h3 style={style} > {text}</h3>
        </div>
    )
};

export { ImageComponent, TextComponent } ;