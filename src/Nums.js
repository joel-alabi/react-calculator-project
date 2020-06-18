import React from 'react';


function Nums(props){
	return(
		<div>
			<div style={{width:'20vw', height: '10vh', background:' #5de65e', fontSize:'20px', textAlign: 'center',paddingTop:'10px',border:'1px solid black'}} >
				 <h1>{props.numbers}</h1>
			 </div>
		</div>
		);
}

export default Nums;