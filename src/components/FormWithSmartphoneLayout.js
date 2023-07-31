
import React from 'react';
import Form from './Form';

import PhoneMock from './PhoneMock';

const FormWithSmartphoneLayout = () => {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <Form />
      <PhoneMock />
    </div>
  );
};

export default FormWithSmartphoneLayout;
