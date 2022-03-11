   import './header.scss';
   import {BsFillCartFill} from 'react-icons/bs';
   import {Link} from 'react-router-dom';
     const  Header = ({item})=>{
         return(
           <header className="header">
           <div>
               <h1>
                   <Link to="/" className="logo">
                       phone shop
                   </Link>
               </h1>
           </div>
           <div className="header-links">
               <ul>
                   <li>
                       <Link to="/" >home</Link>
                   </li>
               </ul>
               <ul>
                   <li>
                       <Link to="/signup">sign up</Link>
                   </li>
               </ul>
               <ul>
                   <li>
                       <Link to="/cart">
                           <BsFillCartFill />
                <span className="cart-length"> {item.length === 0 ? " " : item.length}</span>
                           </Link>
                   </li>
               </ul>
           </div>
           </header>
         )
     }
     export default Header;