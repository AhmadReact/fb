const INTIAL_STATE = {
    
list :[{firstname:"Ahmad",surname:"raza",email:"kingofwaseem32@gmail.com",password:"12345"}]


  };
  
  export default (state = INTIAL_STATE, action) => {
    switch (action.type) {
      case 'SIGN_UP':
        return { 
          
           list: [...state.list, action.payload] 
        
        };
      default:
        return state;
    }
  };
  