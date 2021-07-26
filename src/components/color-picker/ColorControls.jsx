import React from 'react';
import PropTypes from 'prop-types';

const ColorControls = ({ colors, onColorChange, randomColor }) => {
  return (
    <>
      {colors.map(color => (
        <button
          key={color}
          style={{ backgroundColor: color }}
          onClick={() => onColorChange(color)}
        >
          {color}
        </button>
      ))}
    </>
  );
};







ColorControls.propTypes = {
  color: PropTypes.arrayOf(PropTypes.string).isRequired,
  onColorChange: PropTypes.func.isRequired,
};

export default ColorControls;
