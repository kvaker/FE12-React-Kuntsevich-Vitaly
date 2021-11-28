import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const LazyImage = (props) => (
    <LazyLoadImage
        className={props.className}
        alt={props.alt}
        effect="blur"
        src={props.src} />
);

export default LazyImage;