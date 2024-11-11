import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Form from './Components/Form';
import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
 const [mode, setmode] = useState('light')

const toggleMode = () => {
  if(mode==='light' || mode==='green'){

    setmode('dark')
    document.body.style.backgroundColor = 'black'
    showAlert("Dark mode enabled","success");
     document.title = "React App - Dark mode"

  } else {
    setmode('light')
    document.body.style.backgroundColor = 'white'
    showAlert("Light mode enabled","success");
     document.title = "React App - Light mode"
  }
}

const setColorgreen = () =>{
  if(mode==='light' || mode==='dark'){

    setmode('dark')
    document.body.style.backgroundColor = 'green'
    showAlert("Green mode enabled","success");
   

  } else {
    
    document.body.style.backgroundColor = 'green'
    showAlert("Light mode enabled","success");
  }

}

const [alert,setAlert] = useState(null)

const showAlert = (message,type) =>{

  setAlert({
  msg:message,
  type:type
  })

  setTimeout(() => {
    setAlert(null);
  }, 2000);
}
 
 return (
<>

   
   <Router  basename="/my-react-app">
   <Navbar title= "React" sub= "Action" mode={mode} toggleMode={toggleMode} greenmode={setColorgreen}/>
   <Alert alert={alert}/>
  <Routes>
    <Route 
      exact path="/about" 
      element={<div className="container" mode={mode}><About /></div>} 
    />
    
    <Route 
      exact path="/" 
      element={<div className="container mb-6"><Form heading="Enter Text" mode={mode} alert={showAlert} /></div>} 
    />
  </Routes>
</Router>
    
   </>
  );


}

export default App;
