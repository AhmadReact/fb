import React, { useState } from "react";
import './login.css';
import img from '../../images/logo.svg';
import FooterLogin from "./FooterLogin";
import { connect } from "react-redux";
import {signIn} from '../../action/index';
import { Link, useNavigate } from "react-router-dom";


const Login =(props)=>  {

    let navigate = useNavigate();
    const [userdata,setuserdata]=useState({

        username:"",
        password:""

    });

    
    const handleInput=(e)=>{

        const {name,value}=e.target;


            setuserdata({...userdata,[name]:value});
        
            console.log(userdata);
    }



   const authenicate=()=>{

        const tmp=props.reg.list.find(x=>x.email===userdata.username);
  
        if(tmp!=null){
            if(tmp.password===userdata.password)
            {

                    props.signIn(tmp)
                navigate("/main", { replace: true });

              


            }
            else{


                alert("Username and password is incorrect.")
            }
        }
        else{

            alert("Account does not exists")

        }

        
         
    


    }

 
       
 


            return (
                    



                    <>
                    <div className="container">
                <div className="lcontainer">
                <div className="left">
                    <div className="align-left">
                        <img src={img} alt="img"  />
                     
                        <h3>Facebook helps you connect and share with the people in your life.</h3>
                        </div>
                </div>
            </div>

            <div className="rcontainer">
                <div className="right">
                    <div class="centerdiv">
                <input className="inputs" type="text" name="username" value={userdata.username}  onChange={handleInput} placeholder="Email address or phone number"  />
                
                <input className="inputs" name="password"  onChange={handleInput}  value={userdata.password} type="password" placeholder="Password"  />

                <button className="btn" onClick={authenicate}>Log In</button>
                <div className="forgot">
                <a href >Forgotton Password?</a>
                </div>

                <hr></hr>
                <div className="btnclass">
                <Link to="/signup" className="btn-green" >Create New Account</Link>
                </div>
                </div>
                
                </div>
                <div id="reg_pages_msg" className="_58mk"><a href="/pages/create/?ref_type=registration_form" class="_8esh">Create a Page</a> for a celebrity, brand or business.</div>
</div>
                
               
                </div>
                <FooterLogin/>
                </>)
            



   





}


const mapStateToProps= (state)=>
{

        return{
        reg : state.regReducer,
        getinfo:state.authReducer
            }
    
}





export default connect(mapStateToProps,{signIn})(Login);