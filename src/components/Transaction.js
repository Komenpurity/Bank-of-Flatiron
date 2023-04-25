import React, { useEffect, useState }  from 'react'
import TransactionList from './TransactionList'
import Table from 'react-bootstrap/Table';
import Search from './Search';
import Form from './Form';

export default function Transaction() {

  const [transactions,setTransactions] = useState([]) 
  console.log(transactions)

  useEffect( () => {
    fetch("http://localhost:3000/transactions")
    .then(response => response.json())
    .then(data => setTransactions(data)) 
    .catch(error => console.log(error))
  },[]) 

  function handleSearch() {
    
  }

  return (
    <div className='container m-3 p-3'> 
      <h3 className='bg-info text-white p-2'>Bank of Flatiron</h3>
      <Search handleSearch = {handleSearch}/>
      <Form /> 
    <Table striped bordered hover className="table table-sm">    
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
</div>
  )
}
