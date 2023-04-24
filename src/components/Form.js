import React from 'react'

export default function Form() {
  return (
    <form>
    <div class="row">
        <div class="col">
        <input type="date" class="form-control" placeholder="Date"/>
        </div>
        <div class="col">
        <input type="text" class="form-control" placeholder="Category"/>
        </div>
        <div class="col">
        <input type="text" class="form-control" placeholder="Description"/>
        </div>
        <div class="col">
        <input type="text" class="form-control" placeholder="Amount"/>
        </div>
    </div>
    </form>
  )
}
