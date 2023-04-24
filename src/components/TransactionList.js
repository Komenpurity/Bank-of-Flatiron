import React from 'react'

export default function TransactionList({index, category,date,description,amount}) { 

  const isEven= index%2===0

  return (
    <>
      <tr className={isEven?"even":""}>
            <td>{date}</td>
            <td>{category}</td>
            <td>{description}</td>
            <td>{amount}</td>
        </tr>
    </>
  )
}
