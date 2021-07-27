import React from 'react';
import PropTypes from 'prop-types';

const ColorControls = ({ colors, onColorChange }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '15px'
      }}
    >
      <>
        {colors.map(color => (
          <button
            key={color}
            style={{ backgroundColor: color, borderRadius: '5px' }}
            onClick={() => onColorChange(color)}
          >
            {color}
          </button>
        ))}
      </>
    </div >
  );
};

ColorControls.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  onColorChange: PropTypes.func.isRequired,
};

export default ColorControls;
