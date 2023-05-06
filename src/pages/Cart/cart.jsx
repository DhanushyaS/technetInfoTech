import Nav from "../../components/Nav";
import React from 'react';
import './cart.css';

export default function Cart() {
  const [data, setData] = React.useState([]);
  // const [totalPrice, setTotalPrice] = React.useState(0);

  React.useEffect(() => {
    const getData = async () => {
      const datas = await localStorage.getItem('cart');
      const parsedData = JSON.parse(datas);
      setData([...parsedData]);
      console.log(data);
    };
    getData();
  }, []);

  const incrementQuantity = (id) => {
    const newCartItems = [...data];
    const index = newCartItems.findIndex((item) => item.id === id);
    newCartItems[index].quantity += 1;
    setData(newCartItems);
  };

  const decrementQuantity = (id) => {
    const newCartItems = [...data];
    const index = newCartItems.findIndex((item) => item.id === id);
    newCartItems[index].quantity -= 1;
    setData(newCartItems.filter((item) => item.quantity > 0));
  };

  const clearCart = () => {
    localStorage.removeItem('cart');
    setData([]);
  
  };

  // React.useEffect(() => {
  //   setTotalPrice(
  //     data.reduce((acc, item) => acc + item.price * item.quantity, 0)
  //   );
  // }, [data]);

  return (
    <>
     <section className="bg-hero-bg md:h-screen bg-cover bg-center font-Barlow pb-2" style={{maxHeight:"100%"}}>
    <Nav/>
    <div className='cart-container'>
      <table className='cart-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="text-white">
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              
              <td>{item.quantity}</td>
              <td>
                <button className='inc_butt' onClick={() => incrementQuantity(item.id)}>+</button>
                <button className='dec_butt' onClick={() => decrementQuantity(item.id)}>-</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <h2 className='cart-total'> Total: ₹{totalPrice.toFixed(2)}</h2> */}
      <button onClick={clearCart} className='cart-clear'>Clear Cart</button>
    </div>
    </section>
    </>
   
  );
}

