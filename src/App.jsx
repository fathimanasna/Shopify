import React from 'react'
import './App.css'
import Footer from './components/Footer';
import Landing from './pages/Landing';
import { Route, Routes } from 'react-router-dom';
import Product from './pages/Product';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import Pnf from './pages/Pnf';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product/:id/view' element={<Product />} />
        <Route path='/*' element={<Pnf />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
