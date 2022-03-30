import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, withRouter } from 'react-router-dom'
import { submitNewReceipt } from '../../actions';
import ReceiptField from './ReceiptField';

const FIELDS = [
  { name: 'title', label: 'Title' },
  { name: 'text', label: 'Text (optional)'}
];

function ReceiptForm(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const [title, setTitle] = useState();
  const [text, setText] = useState();

  const handleTitleChange = e => setTitle(e.target.value);
  const handleTextChange = e => setText(e.target.value);

  const mapFieldToHandler = { 'title': handleTitleChange, 'text': handleTextChange };

  function renderFields() {
    const fieldList = FIELDS.map((field) => {
      return <ReceiptField key={field.name} type="text" name={field.name} label={field.label} handleChange={mapFieldToHandler[field.name]}/>;
    });
    return fieldList;
  };

  function handleSubmit() {
    const values = {title, text};
    const saveNewReceiptThunk = submitNewReceipt(values, history);
    dispatch(saveNewReceiptThunk);
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
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
};

export default ReceiptForm;
