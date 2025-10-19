// import React from "react";
// import { createRoot } from "react-dom/client";
// import { HashRouter as Router } from "react-router-dom"; 
// import App from "./App.jsx";
// import "./styles/global.css";
// import { CartProvider } from "./context/CartContext.jsx";


// createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <CartProvider>
//       <Router>
//         <App />
//       </Router>
//     </CartProvider>
//   </React.StrictMode>
// );

import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter as Router } from 'react-router-dom'
import App from './App.jsx'
import './styles/global.css'
import { CartProvider } from './context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <Router>
        <App />
      </Router>
    </CartProvider>
  </React.StrictMode>
)

