import { useState } from 'react'
import ScrollToTop from '../src/components/ScrollToTop';
import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AppRouter from '../src/pages/Route'

function App() {
  return (
    <>
    <AppRouter/>
    <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App
