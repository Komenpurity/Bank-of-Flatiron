import React from 'react'

export default function Search({handleSearch}) { 
  return (
    <div>
         <input type="text" className="form-control m-3" onChange={handleSearch} placeholder="Search your Recent Transactions" aria-label="" aria-describedby="basic-addon1"/>
    </div>
  )
}
