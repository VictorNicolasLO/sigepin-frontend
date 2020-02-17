import React from 'react'

    const outlined={		
		border: '1px solid purple',
		borderRadius: 5,
		width: 100,
		height: 30,
		color:"purple",
		margin:20,
		paddingTop:3
	};
    const rised={
		backgroundColor:"purple",
		color:"white",
		padding: '10px 20px',
		borderRadius: 5,
		margin:20,
		paddingTop:3,
		display: "inline-block"
	};

 function Button({ variant,label,onCLick}) {
	 if(variant==="outlined"){
		return(
	 <div style={outlined} >{label}{onCLick}</div> 
		)	 
	 }else{
		return (       		
		<div style={rised} >{label}{onCLick}</div> 		
		)
	 }	
}
export default Button