import React from 'react';
import Receipt from './Receipt';

function ReceiptListContainer(props) {
  // takes receiptList as props
  const { receiptList } = props;

  const content = receiptList && receiptList.map((receipt) => {
    return <Receipt text={receipt.text} title={receipt.title}/>
  })
  
  console.log('content is:', content)
  return (
    <div>
      {content}
    </div>

  )
}

export default ReceiptListContainer;