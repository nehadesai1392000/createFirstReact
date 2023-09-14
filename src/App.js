import './App.css';
import Navbar from './componate/Navbar';
import TextForm from './componate/TextForm';
// import About from './componate/About';
import { useState } from 'react';
import Alert from './componate/Alert';
// import {
//   BrowserRouter,
//   Link,
//   Route,
//   Routes,
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert("");
    }, 3000);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#9BBBBA";
      showAlert("Dark Mode has been enabled", "success")
    } else {

      setMode("light")
      document.body.style.backgroundColor = "white";
      showAlert("light Mode has been enabled", "success")
    }
  }

  const toggleSecondaryMode = () => {
    if (mode === "light" || mode === "dark" || mode === "Success" || mode === "Danger" || mode === "Warning") {
      setMode("secondary");
      document.body.style.background = "#6C757D"
      showAlert("Secondary Mode has been enabled", "success")
    }
  }

  const toggleSuccessMode = () => {
    if (mode === "light" || mode === "dark" || mode === "secondary" || mode === "Danger" || mode === "Warning") {
      setMode("Success");
      document.body.style.background = "#198754"
      showAlert("Success Mode has been enabled", "success")
    }
  }

  const toggleDangerMode = () => {
    if (mode === "light" || mode === "dark" || mode === "secondary" || mode === "Success" || mode === "Warning") {
      setMode("Danger");
      document.body.style.background = "red"
      showAlert("Danger Mode has been enabled", "success")
    }
  }

  const toggleWarningMode = () => {
    if (mode === "light" || mode === "dark" || mode === "secondary" || mode === "Danger" || mode === "Success") {
      setMode("Warning");
      document.body.style.background = "#FFC107"
      showAlert("Warning Mode has been enabled", "success")
    }
  }

  return (
    <>

     {/* <BrowserRouter> */}
      <Navbar mode={mode} toggleMode={toggleMode} toggleSecondaryMode={toggleSecondaryMode} toggleSuccessMode={toggleSuccessMode} toggleDangerMode={toggleDangerMode} toggleWarningMode={toggleWarningMode} />
      <Alert alert={alert} />
      <TextForm heading={"Try TextUtils - Word Counter, character, Remove extra Spaces"} mode={mode} showAlert={showAlert}/>
      {/* <Routes>
        <Route path="/" element={< TextForm heading={"Enter the text to analyze below"} mode={mode} showAlert={showAlert}/>} />
        <Route path="/about" element={<About />} />
      </Routes> */}
    {/* </BrowserRouter> */}


    </>
  );
}

export default App;
