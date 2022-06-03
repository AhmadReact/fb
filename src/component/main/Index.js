import React, { useEffect } from "react";
import { connect } from "react-redux";
import {  useNavigate } from "react-router-dom";
import Header from "./Header"
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import './Index.css'


const Index = (props) =>{
    
    
    let navigate = useNavigate();


useEffect(() => {

     if (!props.userinfo.isSignedIn){
        console.log(props.userinfo.isSignedIn)
        navigate("/", { replace: true }); 
    
    }


 
    
},[])




        return(

<>           

<div className="app">

          
    <Header/>
    <div className="app_body">
          {/* SideBar */}
          <Sidebar />
          {/* Feed */}
          <Feed />

          <Widgets/>

        </div>
        
        </div>    
            
            </>

            )

    
   
}








const mapStateToProps = (state) =>{

        return {

                userinfo : state.authReducer


        }


}

export default connect(mapStateToProps)(Index);