import React, { useState } from 'react'

export default function Form() {
    const [date,setDate] = useState("")
    const [category,setCategory] = useState("")
    const [description,setDescription] = useState("")
    const [amount,setAmount] = useState("")
    const [submittedData, setSubmittedData] = useState([])

    function handleAmount(event){
        setAmount(event.target.value)
    }

    function handleCategory(event){
        setCategory(event.target.value)
    }

    function handleDate(event){
        setDate(event.target.value)
    }

    function handleDescription(event){
        setDescription(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault()
        const formData = {description:description,amount:amount,category:category,date:date}
        const dataArray = [...submittedData,formData]
        setSubmittedData(dataArray)
        setAmount("")
        setDescription("")
        setDate("")
        setCategory("")
    }

    const listSubmisions = submittedData.map((data,index) => {
        return (
            <tr key={index}> 
            <td>{data.date}</td>
            <td>{data.category}</td>
            <td>{data.description}</td>
            <td>{data.amount}</td> 
        </tr>
        )
    })

  return (
    <form class="m-3" onSubmit={handleSubmit}>
    <div class="row">
        <div class="col">
        <input type="date" class="form-control" onChange={handleDate} placeholder="Date"/>
        </div>
        <div class="col">
        <input type="text" class="form-control" onChange={handleCategory} placeholder="Category"/>
        </div>
        <div class="col">
        <input type="text" class="form-control"onChange={handleDescription}  placeholder="Description"/>
        </div>
        <div class="col">
        <input type="text" class="form-control" onChange={handleAmount} placeholder="Amount"/>
        </div>
    </div>
        {listSubmisions}
    <button type="button" class="btn btn-success m-1">Add Transaction</button>  
    </form>
  )
}
