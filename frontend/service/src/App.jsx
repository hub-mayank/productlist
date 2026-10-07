import React, { useEffect, useState } from 'react'
import ProductList from './ProductList';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function APIcall() {
      let responce = await fetch("http://localhost:3001/api/products");
      let data = await responce.json();
      // console.log(data);
      setProducts(data);  
    }
    APIcall();
  }, []);

  return (
    <div>

      <ProductList products={products} />

    </div>
  )
}

export default App;
