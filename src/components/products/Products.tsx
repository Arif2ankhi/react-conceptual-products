import { use } from "react"
import type { ProductType } from "../../type"
import './Products.css'
import Product from "./product/Product"

export interface ProductProps {
    productPromise: Promise<ProductType[]>
}

export default function Products({ productPromise }: ProductProps) {

    const products = use(productPromise);
    
    
    return (
        <>
        
        
        <div className="grid-container ">
            {
            products.map((product, index) => <Product key={index} product = {product}></Product>)
        }
        </div>
        
        </>
    )
}



