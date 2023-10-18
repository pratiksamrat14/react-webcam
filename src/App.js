import React, { useState } from 'react';
import Webcam from 'react-webcam';

const App = () => {
  const [cameraSource, setCameraSource] = useState('user'); // 'user' for front camera, 'environment' for rear camera

  const webcamRef = React.useRef(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
  };

  const switchCamera = () => {
    setCameraSource(cameraSource === 'user' ? 'environment' : 'user');
  };

  return (
    <div>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={{ facingMode: cameraSource }}
      />
      <button onClick={capture}>Capture Photo</button>
      {navigator.mediaDevices && navigator.mediaDevices.enumerateDevices ? (
        <button onClick={switchCamera}>
          Switch Camera ({cameraSource === 'user' ? 'Rear' : 'Front'})
        </button>
      ) : (
        <p>Camera switching is not supported on this device/browser.</p>
      )}
    </div>
  );
};

export default App;
