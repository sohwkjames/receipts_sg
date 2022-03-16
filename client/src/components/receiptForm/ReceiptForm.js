import React, { useState } from 'react';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions/index';
import { connect } from 'react-redux';
import ReceiptField from './ReceiptField';
import { withRouter } from 'react-router-dom'

function ReceiptForm(props) {
  const { handleSubmit, submitReceipt, history } = props;

  const FIELDS = [
    { name: 'title', label: 'Title' },
    { name: 'text', label: 'Text (optional)'}
  ]

  function renderFields() {
    const fieldList = FIELDS.map((field) => {
      return <Field key={field.name} type="text" name={field.name} label={field.label} component={ReceiptField} />;
    });
    return fieldList;
  }

  return(
    <div>
      <form onSubmit={handleSubmit((values) => submitReceipt(values, history))}>
        {renderFields()}
        <button 
          className="teal btn-flat right white-text" 
          type="submit"
        >
          Submit
          <i className="material-icons right">done</i>
        </button>
      </form>
    </div>
  )
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Give us a title!';
  };

  return errors;
}

// withRouter allows access to history objcet
const decoratedReceiptForm = connect(null, actions)(withRouter(ReceiptForm));

// allows us to access redux-form functions in component props.
export default reduxForm({
  validate: validate,
  form: 'receiptForm'
})(decoratedReceiptForm);
