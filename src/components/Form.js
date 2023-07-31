

import React, { useState } from 'react';
import './App.css'; 
import {  Tooltip, TextField, Button } from '@material-ui/core';
const Form = () => {
    const containerStyles1 = {
        position: 'fixed',
        backgroundColor: '#644894',
        top: '175px', 
        right: '320px',
         
        zIndex: '9999', 
      };
      const containerStyles2 = {
        position: 'fixed',
        backgroundColor: '#644894',
        top: '255px', 
        right: '320px', 
        zIndex: '9999', 
      };
      const containerStyles3 = {
        position: 'fixed',
        backgroundColor: '#644894',
        top: '335px', 
        right: '320px',
        zIndex: '9999', 
      };
      const containerStyles4 = {
        position: 'fixed',
        backgroundColor: '#644894',
        top: '410px', 
        right: '320px', 
        zIndex: '9999', 
      };
      const containerStyles5 = {
        position: 'fixed',
        backgroundColor: '#644894',
        top: '490px', 
        right: '320px', 
        zIndex: '9999', 
      };
      
    const [inputText, setInputText] = useState('');

    const [tooltipText, setTooltipText] = useState('');
    const handleInputChange = (event) => {

      setTooltipText(event.target.value);
    };
    const handleButtonClick = () => {
        setIsSubmitted(true);
        
      console.log('Tooltip text:', tooltipText);
    };
  const [targetElement, setTargetElement] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [textSize, setTextSize] = useState(3);
  const [padding, setPadding] = useState(3);
  const [textColor, setTextColor] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');
  const [cornerRadius, setCornerRadius] = useState('');
  const [tooltipWidth, setTooltipWidth] = useState(3);
  const [tooltipHeight, setTooltipHeight] = useState(3);
  const [arrowWidth, setArrowWidth] = useState(3);
  const [arrowHeight, setArrowHeight] = useState(3);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      targetElement,
      tooltipText,
      textSize,
      padding,
      textColor,
      backgroundColor,
      cornerRadius,
      tooltipWidth,
      tooltipHeight,
      arrowWidth,
      arrowHeight,
    });
  };

  
  return (
    <div className="maincontainer">
      <div class="row">
        <div class="col-md-8 order-md-1">
          <div className="maincontainer">
               <div class="row"> 
                 <div class="col-md-8 order-md-1">
                    <form class="needs-validation" novalidate>
                       <div class="row">
                       <div class="col-md-5 mb-3">
                           <label for="country">Target Element</label>
                           <select class="custom-select d-block w-100" id="country" required>
                            <option value="">Choose...</option>
                             <option>Button 1</option>
                             <option>Button 2</option>
                             <option>Button 3</option>
                             <option>Button 4</option>
                             <option>Button 5</option>
                           </select>
                          
                         </div>
                        
                           <div>
                           <label for="firstName">   </label>
                           </div>
                           &nbsp; &nbsp; 
                           <Tooltip title={tooltipText}>
                           <Button  style={containerStyles1} variant="contained" color="primary">
                             Button 1
                          </Button>
                          </Tooltip>
      
                          <TextField label="Enter Tooltip Text" variant="outlined" value={tooltipText}  onChange={handleInputChange} style={{ margin: '10px 0', width: '100%' }}  />
       
                         <div style={{ display: 'flex', alignItems: 'center' }}>
                         <div style={{ marginRight: '100px' }}>
                         <label htmlFor="input1">Text Size</label>
                         <input type="text" id="input1" />
                          </div>
      <div>
        <label htmlFor="input2">Padding</label>
        <input type="text" id="input2" />
      </div>
    </div>
   <div class="col-md-6 mb-3">
   <label for="colour">Text Colour</label>
<input type="text" id="colour" />
    </div>
     </div>
    <div class="mb-3">
    <label for="username">background Color</label>
    <div class="input-group">
    <input type="text" class="form-control" id="username" placeholder="" required />
    </div>
    </div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ marginRight: '100px' }}>
        <label htmlFor="input1">corner Radius</label>
        <input type="text" id="input1" />
      </div>
      <div>
        <label htmlFor="input2">Tooltip width </label>
        <input type="text" id="input2" />
      </div>
    </div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ marginRight: '100px' }}>
        <label htmlFor="input1">arrow Width</label>
        <input type="text" id="input1" />
      </div>
      <div>
        <label htmlFor="input2"> arrow height</label>
        <input type="text" id="input2" />
      </div>
    </div>
   
       <Button
        variant="contained"
        
        style={{ backgroundColor: '#644894', color:'white' }}
        onClick={handleButtonClick}
        disabled={isSubmitted} 
        
      >
        {isSubmitted ? 'Submitted' : 'Submit'} {/* Display "Submitted" after the form is submitted */}
      </Button>
      <Tooltip title={tooltipText}>
        <Button  style={containerStyles2} variant="contained" color="primary">
          Button 2
        </Button>
      </Tooltip>
      <Tooltip title={tooltipText}>
        <Button  style={containerStyles3} variant="contained" color="primary">
        Button 3
        </Button>
      </Tooltip>
      <Tooltip title={tooltipText}>
        <Button  style={containerStyles4} variant="contained" color="primary">
        Button 4
        </Button>
      </Tooltip>
      <Tooltip title={tooltipText}>
        <Button  style={containerStyles5} variant="contained" color="primary">
        Button 5
        </Button>
      </Tooltip>       
     </form>
     </div>
    </div>
    </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
