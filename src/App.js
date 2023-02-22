// import React, { useState, useRef, useEffect } from "react";

// function CanvasColorPicker() {
//   const canvasRef = useRef(null);
//   const [canvasSize, setCanvasSize] = useState({ width: 400, height: 400 });
//   const [selectedPalette, setSelectedPalette] = useState("#000000");
//   const [number, setNumber] = useState(0);
//   const [hoveredNumber, setHoveredNumber] = useState(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     ctx.fillStyle = selectedPalette;
//     ctx.fillRect(0, 0, canvas.width, canvas.height);
//     ctx.font = "60px Arial";
//     ctx.fillStyle = "#FFFFFF";
//     ctx.textAlign = "center";
//     ctx.fillText(number.toString().padStart(2, "0"), canvas.width / 2, canvas.height / 2);
//   }, [selectedPalette, number, canvasSize]);

//   const handlePaletteChange = (event) => {
//     setSelectedPalette(event.target.value);
//   };

//   const handleWidthChange = (event) => {
//     setCanvasSize({ ...canvasSize, width: parseInt(event.target.value) });
//   };

//   const handleHeightChange = (event) => {
//     setCanvasSize({ ...canvasSize, height: parseInt(event.target.value) });
//   };

//   const handleNumberChange = (event) => {
//     setNumber(parseInt(event.target.value));
//   };

//   const handleNumberHover = (event) => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     const mouseX = event.nativeEvent.offsetX;
//     const mouseY = event.nativeEvent.offsetY;
//     const zoomSize = 100;
//     const zoomedCanvas = canvas.nextElementSibling;
//     const zoomedCtx = zoomedCanvas.getContext("2d");
//     const pixelData = ctx.getImageData(mouseX - zoomSize / 2, mouseY - zoomSize / 2, zoomSize, zoomSize).data;
//     zoomedCtx.imageSmoothingEnabled = false;
//     zoomedCtx.clearRect(0, 0, zoomedCanvas.width, zoomedCanvas.height);
//     zoomedCtx.putImageData(new ImageData(pixelData, zoomSize, zoomSize), 0, 0);
//     setHoveredNumber(parseInt(ctx.getImageData(mouseX, mouseY, 1, 1).data[0]));
//   };

//   const handleNumberHoverEnd = () => {
//     const zoomedCtx = canvasRef.current.nextElementSibling.getContext("2d");
//     zoomedCtx.clearRect(0, 0, 100, 100);
//     setHoveredNumber(null);
//   };

//   return (
//     <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
//       <canvas id="myCanvas" ref={canvasRef} width={canvasSize.width} height={canvasSize.height} onMouseMove={handleNumberHover} onMouseLeave={handleNumberHoverEnd}></canvas>
//       {hoveredNumber !== null && (
//         <canvas
//           style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", border: "1px solid black" }}
//           width="100"
//           height="100"
//         ></canvas>
//       )}
//       <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: "16px" }}>
//         <select value={selectedPalette} onChange={handlePaletteChange} style={{ marginRight: "8px" }}>
//           <option value="#000000">Black</option>
//           <option value="#FF0000">Red</option>
//           <option value="#00FF00">Green</option>
//           <option value="#0000FF">Blue</option>
//         </select>
//         <label>Width:</label>
//         <input type="number" value={canvasSize.width} onChange={handleWidthChange} style={{ marginRight: "8px", marginLeft: "8px" }} />
//         Height:
//         <input type="number" value={canvasSize.height} onChange={handleHeightChange} style={{ marginRight: "8px", marginLeft: "8px" }} />
//         <button onClick={() => setCanvasSize({ width: 400, height: 400 })} style={{ marginRight: "8px", marginLeft: "8px" }}>Reset Size</button>
//         <br />
//         <label>Number:</label>
//         <input type="number" value={number} onChange={handleNumberChange} style={{ marginRight: "8px", marginLeft: "8px" }} />
//       </div>
      
//     </div>
//   );
// }

// export default CanvasColorPicker;
        



// import React, { useState } from 'react';
// import { Stage, Layer, Rect, Text } from 'react-konva';
// import { ChromePicker } from 'react-color';

// function Canvas() {
//   const [color, setColor] = useState('#000');
//   const [showColorPicker, setShowColorPicker] = useState(false);
//   const [number, setNumber] = useState(0);
//   const [canvasWidth, setCanvasWidth] = useState(400);
//   const [canvasHeight, setCanvasHeight] = useState(400);

//   function handleColorChange(newColor) {
//     setColor(newColor.hex);
//   }

//   function toggleColorPicker() {
//     setShowColorPicker(!showColorPicker);
//   }

//   function handleNumberChange(event) {
//     setNumber(Number(event.target.value));
//   }

//   function handleCanvasWidthChange(event) {
//     setCanvasWidth(Number(event.target.value));
//   }

//   function handleCanvasHeightChange(event) {
//     setCanvasHeight(Number(event.target.value));
//   }

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//       <div style={{ display: 'flex', justifyContent: 'center' }}>
//         <Stage width={canvasWidth} height={canvasHeight}>
//           <Layer>
//             <Rect width={canvasWidth} height={canvasHeight} fill={color} />
//             <Text text={number.toString().padStart(2, '00')} fontSize={60} fill="#fff" x={(canvasWidth-70) / 2} y={(canvasHeight-20) / 2} align="center" verticalAlign="middle" />
//           </Layer>
//         </Stage>
//       </div>
//       <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '1rem' }}>
//         <div>
//           <label htmlFor="number-input">Number:</label>
//           <input id="number-input" type="number" value={number} onChange={handleNumberChange} style={{ marginLeft: '0.5rem' }} />
//         </div>
//         <div style={{ marginLeft: '1rem' }}>
//           <button onClick={toggleColorPicker}>{showColorPicker ? 'Hide' : 'Show'} Color Picker</button>
//         </div>
//         <div style={{ marginLeft: '1rem' }}>
//           {showColorPicker && (
//             <ChromePicker color={color} onChange={handleColorChange} />
//           )}
//         </div>
//         <div style={{ marginLeft: '1rem' }}>
//           <label htmlFor="canvas-width-input">Width:</label>
//           <input id="canvas-width-input" type="number" value={canvasWidth} onChange={handleCanvasWidthChange} style={{ marginLeft: '0.5rem' }} />
//         </div>
//         <div style={{ marginLeft: '1rem' }}>
//           <label htmlFor="canvas-height-input">Height:</label>
//           <input id="canvas-height-input" type="number" value={canvasHeight} onChange={handleCanvasHeightChange} style={{ marginLeft: '0.5rem' }} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Canvas;




import React, { useState } from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';
import { ChromePicker } from 'react-color';
import './App.css';

function Canvas() {
  const [color, setColor] = useState('#000');
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [number, setNumber] = useState(36);
  const [canvasWidth, setCanvasWidth] = useState(400);
  const [canvasHeight, setCanvasHeight] = useState(400);

  function handleColorChange(newColor) {
    setColor(newColor.hex);
  }

  function toggleColorPicker() {
    setShowColorPicker(!showColorPicker);
  }

  function handleNumberChange(event) {
    setNumber(Number(event.target.value));
  }

  function handleCanvasWidthChange(event) {
    setCanvasWidth(Number(event.target.value));
  }

  function handleCanvasHeightChange(event) {
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
  <div className="button-group">
    <button onClick={() => setCanvasWidth(400)}>Set Width to 400</button>
    <button onClick={() => setCanvasHeight(400)}>Set Height to 400</button>
    <button onClick={() => {
      setCanvasWidth(400);
      setCanvasHeight(400);
    }}>Reset Size</button>
  </div>
</div>

  );
}

export default Canvas;
