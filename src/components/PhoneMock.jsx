import React from 'react';
import  { useState } from "react";

import { Tooltip as ReactTooltip } from 'react-tooltip'
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import MaterialTooltip from "@material-ui/core/Tooltip";

const Container = styled.div`
  background-color: pink;
  width: 100px;
  margin: 40px auto;
  padding: 10px;
  text-align: center;
`;

const StyledReactTooltip = styled(ReactTooltip)`
  background-color: white !important;
  color: black !important;
  box-shadow: 0px 2px 20px lightgray;
  &:after {
    border-top-color: white !important;
  }
`;

const LightTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11
  },
  arrow: {
    color: "white"
  }
}))(MaterialTooltip);

const PhoneMock = () => {
  const [tooltipText, setTooltipText] = useState('');
  const handleInputChange = (event) => {
    setTooltipText(event.target.value);
  };
  const handleButtonClick = () => {
    
    console.log('Tooltip text:', tooltipText);
  };
  const PhoneContainer = styled.div`
    width: 360px;
    height: 640px;
    border: 20px solid black;
    border-radius: 20px;
    background-color: #c0c0c0;
    margin: 25px auto;
    padding: 10px;
    box-shadow: 5px 5px 10px rgb(60, 60, 60));
  `;

  const Screen = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 15px;
    padding: 10px;
    box-shadow: inset 0 0 5px rgb(60, 60, 60);
  `;
  const [enabledThing, setEnabledThing] = useState(false);
  return (
    <PhoneContainer>
      <Screen>
        
        <MaterialTooltip title="Tooltip text">
        <Container>Button1</Container>
      </MaterialTooltip>
      <MaterialTooltip title="Tooltip text">
        <Container>Button2</Container>
      </MaterialTooltip>
      <MaterialTooltip title="Tooltip text">
        <Container>Button3</Container>
      </MaterialTooltip>
       
      <MaterialTooltip title="Tooltip text">
        <Container>Button4</Container>
      </MaterialTooltip>
      <LightTooltip
        interactive
        arrow
        PopperProps={{
          modifiers: {
            offset: {
              enabled: true,
              offset: "0px, -10px"
            }
          }
        }}
        title={
          <label>
            Set thing
            <input
              onChange={e => {
                setEnabledThing(e.target.checked);
              }}
              checked={enabledThing}
              type="checkbox"
            />
          </label>
        }
      >
        <Container>
          button5
        
        </Container>
        </LightTooltip>
      </Screen>
    </PhoneContainer>
  );
};

export default PhoneMock;
