import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Product from "./Components/Product";
import About from "./Components/About";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
   <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:id" element={<Product />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/cart" element={<Cart />} />

        
      </Routes>
    </Router>
    </>
  );
}

export default App;
