import type { ProductType } from './type'
import './App.css'
import { Suspense } from 'react';
import Product from './components/products/Product';


const productPromise = async(): Promise<ProductType[]> =>{
const res = await fetch('https://fakestoreapi.com/products');
const data = await res.json();
return data


}
function App() {
  

  return (
    <>
      <h2>Products</h2>

      <Suspense fallback ={<h1>Loading...</h1>}>
      <Product productPromise={productPromise()}></Product>

      </Suspense>
    </>
  )
}

export default App
