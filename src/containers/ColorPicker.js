/* eslint-disable max-len */
import React, { Component } from 'react';
import ColorControls from '../components/color-picker/ColorControls';
import ColorDisplay from '../components/color-picker/ColorDisplay';

export default class ColorPicker extends Component {
  state = {
    selectedColor: '#000000',
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        selectedColor: '#' + (Math.random().toString(16) + '000000').substring(2, 8),
      });
    }, 1000);
  }

  handleColorChange = (color) => {
    this.setState({ selectedColor: color });
  };



  render() {
    const randomColor = '#' + (Math.random().toString(16) + '000000').substring(2, 8);
    const colors = [randomColor];
    const { selectedColor } = this.state;



    return (
      <>
        <ColorControls colors={colors} onColorChange={this.handleColorChange} />
        <ColorDisplay backgroundColor={selectedColor, randomColor} />
      </>
    );
  }
}


