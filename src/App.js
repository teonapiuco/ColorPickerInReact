import React from "react";
import { hot } from "react-hot-loader";
import { ChromePicker } from "react-color";
import { useState } from "react";
function App() {
  const [color, setColor] = useState("#D563E0");
  return (
    <main>
      <h1 style={{ backgroundColor: color }}>Color Picker in React</h1>
      <div className="container">
        <ChromePicker color={color} onChange={(e) => setColor(e.hex)} />
      </div>
      <p>Change the color of the box using the color picker displayed above</p>
    </main>
  );
}
export default hot(module)(App);
