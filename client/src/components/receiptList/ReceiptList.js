import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ReceiptListContainer from './ReceiptListContainer';

function ReceiptList(props) {

  const receipts = useSelector((selector) => selector.receipt);

  return(
    <div>
      {receipts && <ReceiptListContainer receiptList={receipts}/>}
    </div>
  )
}

export default ReceiptList;
