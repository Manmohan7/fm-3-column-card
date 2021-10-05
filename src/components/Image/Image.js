import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ title, path }) => {
  const images = require.context('../../../public/images', true);
  const src = images(path).default;

  return (
    <img src={src} alt='' aria-hidden="true" className="h-10 lg:h-10" />
  )
}

Image.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Image;
