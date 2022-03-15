import React from 'react';
import Receipt from './Receipt';

function ReceiptListContainer(props) {
  // takes receiptList as props
  const { receiptList } = props;
  console.log('receiptList is', receiptList);

  const content = receiptList && receiptList.map((receipt) => {
    return <Receipt text={receipt.text} title={receipt.title}/>
  })
  
  console.log('content is:', content)
  return (
    <div>This is ReceiptListContainer!
      {content}
    </div>

  )
}

export default ReceiptListContainer;