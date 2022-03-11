import React from 'react';
import Product from '../product/product';
import Sign from '../signup/signup.js';
import Cart from '../cart/cart.js';
import {Routes,Route} from 'react-router-dom';
 const Handl = ({
     item ,
     handproduct,
     Removeproduct,
    Clear}) => {
     return(
         <>
        <Routes>
        <Route path="/signup" element={<Sign />} />
          <Route path="/" element={<Product handproduct={handproduct}/>} />
          <Route path="/cart" element={<Cart 
          item={item} handproduct={handproduct}
           Removeproduct={Removeproduct}
           Clear={Clear}/>} />
        </Routes>
        </>
     );
 };
 export default Handl;