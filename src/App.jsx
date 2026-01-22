import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PackageSelection from "./components/home/package/Package";
import OrderForm from "./components/formulir/Formulir";

function App() {
  return (

    <Router basename="/ticketing">
     
        <Routes>
          
          <Route 
            path="/" 
            element={
              <>
                <PackageSelection />
              </>
            } 
          />

          <Route 
            path="/order" 
            element={
              <OrderForm />
            } 
          />
          
        </Routes>
   
    </Router>
  );
}

export default App;