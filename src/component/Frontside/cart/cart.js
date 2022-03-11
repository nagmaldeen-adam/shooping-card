import React from 'react';
import './cart.scss';

  function Cart ({item,handproduct,Removeproduct, Clear}){
      const totalprice = 
      item.reduce((price,i) => price + i.quantity * i.price ,0)

      return(
  <div className="cart-item">
     <h4 className="cart-header">cart item </h4>
       <div className="clearing">
           {item.length >= 1  &&(
           <button className="button" onClick={Clear}>clearing</button>
           )}</div>
        {item.length === 0 && (
        <div className="empty">there are no purchases</div>)}
        <div>
        {item.map( (i) =>(

         <div key={i.id} className="list">
          <img className="image" src={i.image} alt={i.name} />
          <div className="name">{i.name}</div>
          <div className="function">
          <button onClick={()=>handproduct(i)} className="add">+</button>
          <button onClick={()=>Removeproduct(i)} className="remove">-</button>
           </div>
           <div className="price">
                 {i.quantity} * ${i.price}
               </div>
               </div>
            ))}
            </div>

               <div className="price-name">
                   total price is &nbsp;: &nbsp;&nbsp;&nbsp;
                   <div className="total-price">${totalprice}</div>
               </div>
          </div>
      )
  }
  export default Cart;