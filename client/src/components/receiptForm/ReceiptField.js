import React from 'react';

function ReceiptField(props) {
  const { input, label, meta: {error, touched} } = props;
  // touched is a bool, true if user has entered the field before

  return (<div>
    <label>{label}</label>
    <input {...input}></input>
    <div className="red-text" style={{marginBottom: '5px'}}>
      {touched && error}
    </div>
  </div>)
}

export default ReceiptField;