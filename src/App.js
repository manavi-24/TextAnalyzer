  //import logo from './logo.svg';
  import './App.css';
  import Navbar from './components/Navbar';
  import Textform from './components/Textform';
  import { useState } from 'react'
  import React from 'react'
  import About from './components/About';
  import Alert from './components/Alert';
  import { createRoot } from "react-dom/client";
  import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";

  function App() {
    const [mode, setMode] = useState('light');
    const toggleMode = () => {
      if (mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = '#042743';
        showAlert("Dark mode has been enabled", "success");
      } else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enabled", "success");
      }
    }
    const [alert, setAlert] = useState(null);
    const showAlert = (message, type) => {
      setAlert({
        msg: message,  
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1600);
    }

    return (
      <>
      <BrowserRouter>
      <Navbar title="TextAnalyzer"  abouttext="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
        <Route exact path="/home" element={<Textform heading="Enter text to be analysed" mode={mode} showAlert={showAlert} />} />
        {/*<Textform heading="Enter text to be analysed" mode={mode} showAlert={showAlert} />*/}
        <Route exact path="/about" element={<About mode={mode} />} />
        {/*<About mode={mode} />*/}
      </Routes>
      </div>
      </BrowserRouter>
      </>
      );
  }

  export default App;
