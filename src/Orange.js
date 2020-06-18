import React from 'react';

function Orange(props){
	return(
		<div>
			<div style={{width:'20vw', height: '10vh', background:'orange',color:'white', fontSize:'20px', textAlign: 'center',paddingTop:'10px', border:'1px solid black'}}>
				
				 <h1>{props.signs}</h1>
				  </div>
		</div>
		);
}

export default Orange;