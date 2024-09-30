import React from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Logintable from './Logintable'; 
import ProductTable from './ProductTable'; 
import DatakartTrace from './DatakartTrace'; 
 
function App() { 
  return ( 
    <Router> 
      <Routes> 
        <Route path="/" element={<Logintable />} /> 
        <Route path="/ProductTable" element={<ProductTable />} /> 
        <Route path="/DatakartTrace" element={<DatakartTrace />} /> 
      </Routes> 
    </Router> 
  ); 
} 
 
export default App;