import React from 'react';
import Nums from './Nums';
import Resultdisplay from './Display';
import Zero from './Zero';
import Orange from './Orange';





function App() {
    return ( 
        <div classNameName = "App" >
<div className="container">
        <Resultdisplay/>

      <span  style={{flex:1, display:'flex', flexDirection:'row',flexWrap: 'wrap',maxwidth:'80vw',marginLeft:'10vw'}}>
        
        <Nums numbers='AC'/ >
        <Nums numbers='+/-'/ >
        <Nums numbers='%'/ >
        <Orange signs='÷'/ >
       

        <Nums numbers='7'/ >
        <Nums numbers='8'/ >
        <Nums numbers='9'/ >
        <Orange signs='X'/ >
     

        <Nums numbers='4'/ >
        <Nums numbers='5'/ >
        <Nums numbers='6'/ >
        <Orange signs='-'/ >
       

        <Nums numbers='1'/ >
        <Nums numbers='2'/ >
        <Nums numbers='3'/ >
        <Orange signs='+'/ >



        <Zero / >
        <Nums numbers='.'/ >
        <Orange signs='='/ >

      </span>
      </div>   
        </div>

       );


        /*Joel Alabi
        Codetrain Gen14
        */
        
}

export default App;