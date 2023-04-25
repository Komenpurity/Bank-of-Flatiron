import React from 'react'

export default function TransactionList({index, category,date,description,amount}) { 

  return (
    <>
      <tr key={index} > 
            <td>{date}</td>
            <td>{category}</td>
            <td>{description}</td>
            <td>{amount}</td>
        </tr>
    </>
  )
}
