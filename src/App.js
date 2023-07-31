// src/App.js

import React from 'react';
import FormWithSmartphoneLayout from './components/FormWithSmartphoneLayout';
import PhoneMock from './components/PhoneMock';

function App() {
  return (
    <div style={{ padding: '20px' }}>
     
    <div className="flex-1">
    <FormWithSmartphoneLayout />
    </div>
    {/* <div className="flex-1">
    <PhoneMock />
    </div> */}
  
      {/* <h1>Form with Smartphone Representation</h1>
      <FormWithSmartphoneLayout />
      <PhoneMock /> */}
    </div>
  );
}

export default App;
