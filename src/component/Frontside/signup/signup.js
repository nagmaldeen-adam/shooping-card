  import react from 'react';
  import Image from '../../backside/Img/honor.jpg';
  import './signup.scss';
  const Sign = ()=>{
      return(
       <div className="sign">
         <div className='contact'>
            <div className='leftside' style={{backgroundImage:`url(${Image})`}}>
            </div>
            <div className="rightside">
                <h1>contact us</h1>
        <form id="contact-form" method="POST">
       <label htmlFor="name">Full Name</label>
        <input type="text" name="name" placeholder="Enter Your Name..." />
       <label htmlFor="email">Email</label>
       <input type="email" placeholder="Enter Your Email..." name="email"/>
        <label htmlFor="message" >message</label>
        <textarea row="5" name="message" required> write your message here...</textarea>
        <button type="submit">Send message</button>
        </form>
        </div>
       </div>
       </div>
      )
  }
  export default Sign;