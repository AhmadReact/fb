
export const signIn = (userInfo) => {
  return {
    type: "SIGN_IN",
    payload: userInfo
  };
};

export const signOut = () => {
  return {
    type: "SIGN_OUT"
  };
};


export const signup = (userInfo) =>{

    return{
      type: "SIGN_UP",
      payload:userInfo
    };


}


export const getinfo =()=>{

return{

  type:"GET_INFO",
  
}


}