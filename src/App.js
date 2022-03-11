import React ,{useState} from 'react';
import './App.scss';
import Header from './component/Frontside/header/header.js';
import Handl from './component/Frontside/Route/route.js';
import {BrowserRouter as Router} from 'react-router-dom';
function App() {
  const [item,setItem] = useState([]);
  const handproduct =(product)=>{
    const productExist = item.find((i) =>i.id === product.id);
    if(productExist){
      setItem(item.map((i) => i.id === product.id ?
       {...productExist,quantity:productExist.quantity +1} :i)
      )} 
      else{
        setItem([...item ,{...product,quantity :1}]);
      }
  }
  const Removeproduct =(product)=>{
    const productExist = item.find((i) =>i.id === product.id);
    if(productExist.quantity ===1) {
      setItem(item.filter((i)=>i.id !== product.id));
    }
    else{
      setItem(item.map((i) => i.id === product.id ?
       {...productExist,quantity:productExist.quantity -1}:i));
    }
  }
  const Clear =()=>{
    setItem([]);
  }
  return (
    <div className="App">
    <Router>
      <Header item={item} />
      <Handl 
      item={item}  
      handproduct={handproduct} 
      Removeproduct={Removeproduct}
      Clear={Clear} />
    </Router>
    </div>
  );
}

export default App;
