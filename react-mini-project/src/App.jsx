import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="mx-5">
        <Navbar />
        <Sidebar />
        <Footer />
      </div>
    </>
  );
}

export default App;
