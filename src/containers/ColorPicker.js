import React, { Component } from 'react';
import ColorControls from '../components/color-picker/ColorControls';
import ColorDisplay from '../components/color-picker/ColorDisplay';

export default class ColorPicker extends Component {
  state = {
    selectedColor: 'red',
  };

  handleColorChange = (color) => {
    this.setState({ selectedColor: color });
  };

  render() {
    const colors = ['red', 'yellow', 'blue'];
    const { selectedColor } = this.state;

    return (
      <>
        <ColorControls colors={colors} onColorChange={this.handleColorChange} />
        <ColorDisplay backgroundColor={selectedColor} />
      </>
    );
  }
}
