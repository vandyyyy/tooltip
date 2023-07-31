// src/components/Phone.js

import React from 'react';
import { Paper } from '@mui/material';
import { PhoneIphone } from '@mui/icons-material';

const Phone = () => {
  return (
    <Paper
      elevation={3}
      style={{
        width: '300px',
        height: '600px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borde
      }}
    >
      <PhoneIphone fontSize="large" />
      <div style={{ marginTop: '16px', fontSize: '18px' }}>
        Your Phone Content Goes Here
      </div>
    </Paper>
  );
};

export default Phone;
