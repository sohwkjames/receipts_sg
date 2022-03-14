import React, { useState } from 'react';
import ReceiptForm from './ReceiptForm';
import { reduxForm } from 'redux-form';

function ReceiptNew(props) {  

  return(
    <div>
      <ReceiptForm />
    </div>
  )
}

export default reduxForm({ form: 'receiptForm' })(ReceiptNew);
