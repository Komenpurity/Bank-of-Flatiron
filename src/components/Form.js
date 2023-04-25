import React, {useState } from 'react'

export default function Form({onAddItem}) {
    const [date,setDate] = useState("")
    const [category,setCategory] = useState("")
    const [description,setDescription] = useState("")
    const [amount,setAmount] = useState(0)

    function handleSubmit(event){ 
        event.preventDefault()
        const formData = {
            description:description,
            amount:amount,
            category:category,
            date:date
        }
        
        fetch("http://localhost:3000/transactions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          })
            .then((r) => r.json())
            .then((data) => onAddItem(data))
            .catch(error => console.log(error))

            event.target.reset();
    }

  return (
    <form className="m-3" onSubmit={handleSubmit}> 
    <div className="row">
        <div className="col">
        <input type="date" className="form-control" onChange={(e) =>  setDate(e.target.value)} placeholder="Date"/>
        </div>
        <div className="col">
        <input type="text" className="form-control" onChange={(e) =>  setCategory(e.target.value)} placeholder="Category"/>
        </div>
        <div className="col">
        <input type="text" className="form-control"onChange={(e) =>  setDescription(e.target.value)}  placeholder="Description"/>
        </div>
        <div className="col">
        <input type="text" className="form-control" onChange={(e) =>  setAmount(e.target.value)} placeholder="Amount"/>
        </div>
    </div>  
        <button type="submit" className="btn btn-success m-1">Add Transaction</button>  
    </form>
  )
}
