import React, { useState } from "react";
import "./App.css";

import CenterButtons from './CenterButtons/CenterButtons.jsx';

const App = (props) => {
  const [width, setWidth] = useState(500);
  const [height, setHeight] = useState(500);
  const [btnBorder, setBtnBorder] = useState(5);

  return (
    <div className="App">
      <CenterButtons width={width} height={height} />
    </div>
  )
}

export default App;