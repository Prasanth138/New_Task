import React, { useState } from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';
import { ChromePicker } from 'react-color';
import './App.css';

const Canvas = () => {
  const [color, setColor] = useState('#000');
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [number, setNumber] = useState(36);
  const [canvasWidth, setCanvasWidth] = useState(400);
  const [canvasHeight, setCanvasHeight] = useState(400);

  const handleColorChange = (newColor) => {
    setColor(newColor.hex);
  }

  const toggleColorPicker = () => {
    setShowColorPicker(!showColorPicker);
  }

  const handleNumberChange = (event) => {
    setNumber(Number(event.target.value));
  }

  const handleCanvasWidthChange = (event) => {
    setCanvasWidth(Number(event.target.value));
  }

  const handleCanvasHeightChange = (event) => {
    setCanvasHeight(Number(event.target.value));
  }

  return (
    <div className="canvas-container">
      <div className="canvas-wrapper">
        <Stage width={canvasWidth} height={canvasHeight}>
          <Layer>
            <Rect width={canvasWidth} height={canvasHeight} fill={color} />
            <Text
              text={number.toString().padStart(2, '00')}
              fontSize={60}
              fill="#fff"
              x={(canvasWidth - 70) / 2}
              y={(canvasHeight - 20) / 2}
              align="center"
              verticalAlign="middle"
              onMouseEnter={(e) => {
                e.target.fontSize(80);
                e.target.fill("#6BF359");
                e.target.x((canvasWidth - 85) / 2);
                e.target.y((canvasHeight - 30) / 2);
              }}
              onMouseLeave={(e) => {
                e.target.fill("#fff");
                e.target.fontSize(60);
                e.target.x((canvasWidth - 70) / 2);
                e.target.y((canvasHeight - 20) / 2);
              }}
            />
          </Layer>
        </Stage>
      </div>
      <div className="input-group">
        <label htmlFor="number-input">Number:</label>
        <input id="number-input" type="number" value={number} onChange={handleNumberChange} />
        <button className="color-picker-toggle" onClick={toggleColorPicker}>
          {showColorPicker ? 'Hide' : 'Show'} Color Picker
        </button>
        {showColorPicker && (
          <div className="color-picker-container">
            <ChromePicker color={color} onChange={handleColorChange} />
          </div>
        )}
        <label htmlFor="canvas-width-input">Width:</label>
        <input id="canvas-width-input" type="number" value={canvasWidth} onChange={handleCanvasWidthChange} />
        <label htmlFor="canvas-height-input">Height:</label>
        <input id="canvas-height-input" type="number" value={canvasHeight} onChange={handleCanvasHeightChange} />
      </div>
    </div>
  );
}

export default Canvas;

