import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

const App = () => {
  const webcamRef = useRef(null);
  const [i, sI] = useState(null)
  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    sI(imageSrc)
  };
  return (
    <div>
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      <button onClick={capture}>Capture Photo</button>
      {
       i && <img src= {i}/>
      }
    </div>
  );
};

export default App;
