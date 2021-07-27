import React, { Component } from 'react';
import ColorControls from '../components/color-picker/ColorControls';
import ColorDisplay from '../components/color-picker/ColorDisplay';

export default class ColorPicker extends Component {
  state = {
    selectedColor: '#ffffff',
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        selectedColor: '#' + Math.floor(Math.random() * 16777215).toString(16),
      });
    }, 1000);
  }

  handleColorChange = (color) => {
    this.setState({ selectedColor: color });
  };

  render() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
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
