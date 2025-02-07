import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
 
  return (

    <>
      <div className="mx-2">
        <Navbar ProjectName = "SebSam"/>
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
