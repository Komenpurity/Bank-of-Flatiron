import React, { useEffect, useState }  from 'react'
import TransactionList from './TransactionList'
import Table from 'react-bootstrap/Table';

export default function Transaction() {

  const [transactions,setTransactions] = useState([]) 

  useEffect( () => {
    fetch("http://localhost:3000/transactions")
    .then(response => response.json())
    .then(data => setTransactions(data)) 
  },[]) 

  return (
    <>
      <h3>Bank of Flatiron</h3>
    <Table striped bordered hover responsive >    
      <thead>
        <tr>
            <th>Date</th> 
            <th>Category</th>
            <th>Description</th>
            <th>Amount</th>
        </tr>
        </thead>
        <tbody>
            {/* trs */}
            {transactions.map((transaction,index)=>{
                return <TransactionList index={index} date={transaction.date} category={transaction.category} description={transaction.description}  amount={transaction.amount} key={transaction.id} />
            })}
        </tbody>
    </Table>
</>
  )
}
