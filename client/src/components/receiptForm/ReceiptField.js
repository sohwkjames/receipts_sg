import React from 'react';

function ReceiptField(props) {
  // touched is a bool, true if user has entered the field before
  const { key, name, label, handleChange } = props;
  return (
    <div>
      <label>{label}</label>
      <input onChange={handleChange}></input>
      <div className="red-text" style={{marginBottom: '5px'}}>
      </div>
    </div>
  )
}

export default ReceiptField;