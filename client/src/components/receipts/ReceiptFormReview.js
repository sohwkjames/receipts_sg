import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

function ReceiptFormReview(props) {

  console.log('props in formReview:', props);

  const { onCancel, formValues, submitReceipt } = props;

  return(

    <div>
      ReceiptFormReview
      <button onClick={onCancel}>Cancel</button>
      <button onClick={submitReceipt(formValues)}>Submit</button>


    </div>
  )
}

function mapStateToProps(state) {
  // console.log('in ReceiptFormReviews mapStateToProps, state received:', state)
  return { formValues: state.form.receiptForm, someOtherVal: state.form.auth };
}

export default connect(mapStateToProps, actions)(ReceiptFormReview);
