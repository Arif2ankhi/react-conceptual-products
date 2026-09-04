import type { ProductType } from './type'
import './App.css'
import { Suspense } from 'react';
import Product from './components/products/Products';
import BestSelling from './components/BestSelling/BestSelling';


const productPromise = async(): Promise<ProductType[]> =>{
const res = await fetch('https://fakestoreapi.com/products');
const data = await res.json();
return data
}

const bestSellingPromise = async(): Promise<ProductType[]> =>{
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
      <h1>Best Selling Products</h1>
      <BestSelling bestSellingPromise= {bestSellingPromise()}></BestSelling>

      </Suspense>
    </>
  )
}

export default App
