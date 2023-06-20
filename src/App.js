import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { OrderTable } from './Componant/OrderTable';

function App() {


const orders =(desc, apparel, grocery , Name, date) =>{
const myorder ={
  orderDescription:desc,
  countOfItemTypes:apparel,
  countOfItemTypes:grocery,
  createdBy:Name,
  createdAt:date

  
}
console.log(myorder);
setData([...data,myorder])
}

  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://631945908e51a64d2be10770.mockapi.io/api/v1/allOrders').then((result) => { result.json().then((resp) => { setData(resp) }) })

  }, [])
  const onDelete = (item) => {
    setData(
      data.filter((e) => {
        return e !== item;
      })
    );
  };
  // console.log(data);
  return (
    <>

      <h1>GetApi </h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">OrderID</th>
            <th scope="col">OrderDescription</th>
            <th scope="col" colSpan={2}>Count of item types include in order </th>
            <th scope="col">% of item in apparel </th>
            <th scope="col">Created By</th>
            <th scope="col">Created Date</th>
            <th scope="col">Action</th>


          </tr>
        </thead>
        <tbody>
          {data.map((item) =>
            <tr>
              <td>{item.id}</td>
              <td>{item.orderDescription}</td>
              <td>Apparel {item.countOfItemTypes.apparel}</td>
              <td>Grocery {item.countOfItemTypes.grocery}</td>
              {item.countOfItemTypes.apparel == item.countOfItemTypes.grocery ? <td> 50% </td> : <td>25%</td>}

              <td>{item.createdBy}</td>
              <td>{item.createdAt}</td>

              <td><button type="button" className="btn btn-outline-danger rounded-pill" onClick={() => { onDelete(item) }}>Delete</button></td>
            </tr>
          )}
        </tbody>
      </table>
      <OrderTable orders={orders}/>
    </>
  );
}

export default App;
