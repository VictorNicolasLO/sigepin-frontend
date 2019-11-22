import React from 'react';
import './App.css';
import DemoComponent from './components/demo-component';
import Button from './components/Button';




function App() {

 
  function editar(){
		// Participar
  }
  
	function participar(){
		// Participar
  }

  
  return (
    <div className="App">
      <DemoComponent greeting="Hello world" />
      <Button variant="outlined"  onClick={editar} label="Editar"></Button>        
      <Button  variant="rised"   onClick={participar} label="Participar"></Button>   
    </div>
  );
}

export default App;
