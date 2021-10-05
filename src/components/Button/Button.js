import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ bgColor }) => (
  <a href="/some-link" className={`absolute bottom-0 mb-12 px-8 py-3 bg-gray rounded-full inline-block text-${bgColor} font-lexend font-bold`}>
    Learn More
  </a>
);

Button.propTypes = {
  bgColor: PropTypes.string.isRequired
};

export default Button;