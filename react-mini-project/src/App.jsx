import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import logoImg from './assets/flag_of_portugal.png';
import Receipe from "./components/ReceipeList";

function App() {
  return (
    <>
      <div className="mx-2">
        <Navbar ProjectName = "SebSam"/>
        {/* picture = {<img src={logoImg}/>} */}
        <Sidebar />
 
        <Footer />
      </div>
    </>
  );
}

export default App;
