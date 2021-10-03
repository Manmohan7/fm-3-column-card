import React from 'react';
import PropTypes from 'prop-types';
import Button from "../Button";
import Image from '../Image';

const Card = (props) => {
  const { imgLink, title, description, bgColor } = props.content

  return (
    <div className={`p-12 pb-30 text-white bg-${bgColor} lg:pt-12 lg:pb-44 lg:px-11 relative`}>
      <Image path={imgLink} title={title} />
      <h1 className="mt-8 text-gray text-4xl font-big font-bold uppercase lg:text-5xl lg:tracking-wide">{title}</h1>
      <p className="mt-6 text-white font-lexend leading-6 tracking-wide">{description}</p>
      <Button bgColor={bgColor} />
    </div>
  )
}

Card.propTypes = {
  content: PropTypes.object.isRequired
};

export default Card;
