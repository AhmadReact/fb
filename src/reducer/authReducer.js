const INTIAL_STATE = {
  isSignedIn: "",
  userInfo: ""
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return { ...state, isSignedIn: true, userInfo: action.payload };
    case 'SIGN_OUT':
      return { ...state, isSignedIn: false, userInfo: null };
     
    default:
      return state;
  }
};
