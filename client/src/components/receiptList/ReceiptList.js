import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { useEffect, useState } from 'react';
import ReceiptListContainer from './ReceiptListContainer';

function ReceiptList(props) {

  const { fetchReceipts } = props;
  const [receiptList, setReceiptList] = useState();
  const [receiptCount, setReceiptCount] = useState(0);

  useEffect(async () => {
    const receipts = await fetchReceipts();
    setReceiptList();
    console.log('New receipt count:', receiptCount);
  }, []);

  return(
    <div>
      {receiptList && <ReceiptListContainer receiptList={receiptList}/>}
    </div>
  )
}

function mapStateToProps(state) {
  return { receipt: state.receipt }
}

export default connect(mapStateToProps, actions)(ReceiptList);
