import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/About";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import Product from "./pages/product";
import Cart from "./pages/Cart";
import Login from "./pages/login";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer"; // ✅ import Footer
import Register from './pages/Register'
const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <Navbar />
      <SearchBar />

      <main className="flex-1"> {/* ✅ pushes footer to bottom */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/collection' element={<Collection/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/product/:productId' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/place-order' element={<PlaceOrder/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </main>

      <Footer /> {/* ✅ shows on every page */}
    </div>
  );
};

export default App;