import React, { useState } from 'react'
// import Datatablr from "react-data-table-componant"

export const OrderTable = ({ orders }) => {


  const [desc, setdesc] = useState([])
  const [apparel, setapparel] = useState([])
  const [grocery, setgrocery] = useState([])

  const [Name, setName] = useState([])
  const [date, setdate] = useState([])


  const submit = (e) => {
    e.preventDefault()
    if (!desc || !apparel || !grocery || !Name ) {
      alert("Enter Data")
    } else {
      orders(desc, apparel, grocery, Name, date);
    }

  }
  return (
    <>
      <div className="container">
        <form onSubmit={submit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Your Description</label>
            <input type="text" className="form-control" value={desc} onChange={(e) => setdesc(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />

          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">apparel</label>
            <input type="Number" className="form-control w-25" value={apparel} onChange={(e) => setapparel(e.target.value)} id="exampleInputPassword1" />
            <label htmlFor="exampleInputPassword1" className="form-label">grocery</label>
            <input type="Number" className="form-control w-25" value={grocery} onChange={(e) => setgrocery(e.target.value)} id="exampleInputPassword1" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
            <input type="text" className="form-control" value={Name} onChange={(e) => setName(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />

          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Today date</label>
            <input type="date" className="form-control" value={date} onChange={(e) => setdate(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />

          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  )
}
