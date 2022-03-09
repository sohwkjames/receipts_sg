import React, { useState } from 'react';
import ReceiptForm from './ReceiptForm';
import { reduxForm } from 'redux-form';
import ReceiptFormReview from './ReceiptFormReview';

function ReceiptNew(props) {  
  const [showFormReview, setShowFormReview] = useState(false);

  return(
    <div>
      {showFormReview && <ReceiptFormReview 
        onCancel = {() => setShowFormReview(false)}
      />}
      <ReceiptForm 
        onSurveySubmit={() => setShowFormReview(true)}
      />
      
    </div>
  )
}

export default reduxForm({ form: 'receiptForm' })(ReceiptNew);
