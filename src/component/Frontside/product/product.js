import react from 'react';
import './product.scss'
import {Data} from '../../backside/data.js';
  const Product = ({handproduct})=>{
      const {DataItem} =Data;
      return(
          <div className="product">
             {DataItem.map((DataItem,key)=>(
             <div className="card" key={key}>
                 <div  className="product-image">
                     <img src={DataItem.image} alt={DataItem.name} />
                 </div>
                 <div className="product-name">
                     <h3>{DataItem.name}</h3>
                     </div>
                     <div className="product-price">
                         ${DataItem.price}
                         </div>
                         <div>
                             <button className="product-button" 
                             onClick={()=> handproduct(DataItem)}>add to card</button>
                             </div>
                 </div>
             ))}
          </div>
      );
  };
  export default Product;