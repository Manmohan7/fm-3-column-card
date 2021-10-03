import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ bgColor }) => (
  <button className={`absolute bottom-0 mb-12 px-8 py-3 bg-gray rounded-full inline-block text-${bgColor} font-lexend font-bold`}>
    Learn More
  </button>
);

Button.propTypes = {
  bgColor: PropTypes.string.isRequired
};

export default Button;