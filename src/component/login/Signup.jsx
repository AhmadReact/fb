import React, { useState } from "react";
import './login.css';
import FooterLogin from "./FooterLogin";
import img from '../../images/logo.svg';
import { connect } from "react-redux";
import { signup } from "../../action";
import { Link, useNavigate } from "react-router-dom";




const  Signup =(props)=> {


  let navigate = useNavigate();
  

   const  [userRegisteration,setUserRegisteration]=useState({
          firstname:"",
          surname:"",
          email:"",
          password:""
  });

  

 



const handleInput = (e) =>{


  console.log(props.reg);


  
  
  const name= e.target.name;
  const value=e.target.value;

  setUserRegisteration({...userRegisteration,[name]:value})



}

const handleSubmit = (e) =>{
  e.preventDefault();

  props.signup(userRegisteration);

  alert("Your account has been registered successfully.")
  navigate("/", { replace: true });
  
}



  
    return(
                <>
            <div className="signup-container">

        <div className="signup">


<img src={img} alt="img"  />

<form onSubmit={handleSubmit}>
<div className="card">
<div>
<h1>Create a new account</h1>
</div>
<div className="slogan">
<h4>Its quick and easy</h4>
</div>

<div className="line"></div>
<div className="ui big input inputblock">
<input  type="text" name="firstname" onChange={handleInput} value={userRegisteration.name} placeholder="First name" style={{marginRight:"5px",width:"45%"}} required />
<input type="text" name="surname"  onChange={handleInput} value={userRegisteration.surname} style={{display:"flex",width:"50%"}} placeholder="Surname" />

</div>

<div className="ui big input inputblock">
<input  type="text"  name="email"  onChange={handleInput} value={userRegisteration.email}  placeholder="Mobile number or email address" />


</div>
<div className="ui big input inputblock">
<input  type="text" name="password"  onChange={handleInput} value={userRegisteration.password} placeholder="New password" />


</div>


<div className="ui big labeled input inputblock">
  <div className="ui label">
    Date of birth
  </div>
  <input type="date" placeholder="mysite.com"/>
</div>


<p style={{marginTop:"10px"}}>People who use our service may have uploaded your contact information to Facebook. Learn more.</p>

<p style={{marginBottom:"30px"}}>By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy. You may receive SMS notifications from us and can opt out at any time.</p>
<button className="btn-green" type="submit" >Sign up</button>

<Link to="/" style={{fontSize:"20px",marginTop:"20px"}}>Already have an account?</Link>

</div>
</form>
</div>
</div>


      
           
            <FooterLogin/>

</>

    )

  




}


const mapStateToProps = (state)=>{

  return{
  reg:state.regReducer
}


}


export default connect(mapStateToProps,{signup})(Signup);