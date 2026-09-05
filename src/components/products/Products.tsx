import { use, useState } from "react"
import type { ProductType } from "../../type"
import './Products.css'
import Product from "./product/Product"

export interface ProductProps {
    productPromise: Promise<ProductType[]>
}

export default function Products({ productPromise }: ProductProps) {

    const products = use(productPromise);

    const [cartProducts, setCartProducts] = useState<ProductType[]>([])

    const handleCartUpdate = (product:ProductType): void =>{
        let newCartProducts = [...cartProducts, product]

        if(cartProducts.includes(product)){
            newCartProducts =cartProducts.filter(p=> p.id != product.id)
            
        }

        setCartProducts(newCartProducts)
    }
    
    
    return (
        <>
        
        <h1>Cart Items:{cartProducts.length}</h1>
        <div className="grid-container ">
            {
            products.map((product, index) => <Product handleCartUpdate={handleCartUpdate} key={index} product = {product}></Product>)
        }
        </div>
        
        </>
    )
}



