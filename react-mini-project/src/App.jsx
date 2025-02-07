import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import logoImg from './assets/flag_of_portugal.png';
import Receipe from "./components/ReceipeList";
import ReceipeDetail from "./components/ReceipeDetail"
import { NavLink, Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ReceipeList from "./data/ReceipeList.json";
import { useState } from "react";

function App() {

  // const [displayVariable, setDisplayVariable] = useState(ReceipeList);
 
  return (

    <>

      <div className="mx-2">
        <Navbar ProjectName = "SebSam"/>
        <Sidebar />
        <Footer />
        {/* <ReceipeList/> */}
      </div>

      {/* <Routes> */}
        {/* <NavLink to ="/<Sidebar />">Home</NavLink> */}
        {/* <Route path="/" element = {homepage}/> */}
        {/* <Route path="/Receipe/:receipeId" element = {<ReceipeDetail receipeArr = {displayVariable}/>}/> */}
        {/* <Route path="/ContactUs" element = {Contact-Us}/> */}
      {/* </Routes> */}
    </>
  );
}

export default App;
