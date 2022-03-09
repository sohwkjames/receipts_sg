import React from 'react';
import { reduxForm, Field } from 'redux-form';
import ReceiptField from './ReceiptField';

function ReceiptForm(props) {
  const { handleSubmit, onSurveySubmit, values } = props;

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
      <form onSubmit={handleSubmit(onSurveySubmit)}>
        {renderFields()}
        <button 
          className="teal btn-flat right white-text" 
          type="submit"
        >
          Submit
          <i class="material-icons right">done</i>
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

// allows us to access redux-form functions in component props.
export default reduxForm({
  validate: validate,
  form: 'receiptForm'
})(ReceiptForm);
