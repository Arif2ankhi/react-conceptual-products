import { use } from "react"
import type { ProductType } from "../../type"

export interface ProductProps {
    productPromise: Promise<ProductType[]>
}

export default function Product({ productPromise }: ProductProps) {
    const products = use(productPromise);
    console.log(products);
    
    return 
}