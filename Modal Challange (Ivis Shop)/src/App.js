import './App.css';
import 'animate.css'; 
import React, { useState } from 'react';
import Title from "./components/Title";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(true);
  const [products] = useState([
    {name: 'Accessories', price: 20, id: 1},
    {name: 'Women Tops', price: 11, id: 2},
    {name: 'Jeans', price: 29, id: 3},
    {name: 'Dresses', price: 59, id: 4},
    {name: 'Jumpsuits', price: 21, id: 5},
    {name: 'Swimsuits', price: 30, id: 6},
    {name: 'Shoes', price: 46, id: 7}
  ])

  console.log(showModal);

  const handleClose = () => {
    setShowModal(false)
  }

  return (
    <div className="App container">
      <Title title="Ivis Shop"/>

      <React.Fragment>
          <table className="table mt-5">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}$</td>
            </tr>
            ))}
            </tbody>
          </table>
      </React.Fragment>

      {showModal && <Modal closeModal={handleClose}>
        <h1 className='mt-2'>10% OFF SALE!!</h1>
        <h5 className='mt-3'>BUY ALL ITEMS AND GET MORE DISCOUNT</h5>
      </Modal>}

      <div>
        <button className='saleBtn float-end mt-2 animate__animated animate__pulse animate__infinite' title='SALE!!' onClick={() => setShowModal(true)}>
          <i className="fa-solid fa-gift fs-2 saleIcon"></i>
        </button>
      </div>
    </div>
  );
}

export default App;
