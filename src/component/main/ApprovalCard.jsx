import React from "react";

const ApprovalCard = (props) =>{

return(


<div className="approval">


{props.children}
<button>Accept {props.height}</button>
<button>Ignore</button>

</div>



)




}


export default ApprovalCard;