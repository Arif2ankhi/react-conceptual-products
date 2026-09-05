import { useState } from "react";
import type { ProductType } from "../../../type";
import './Product.css'

export interface ProductProps {
    product: ProductType
    handleCartUpdate:(product:ProductType) => void
}

export default function Product  ({ product, handleCartUpdate }: ProductProps)  {

    const[addCart, setAddCart] = useState(false);

    const handleAddCart = () =>{
        setAddCart(!addCart)
        handleCartUpdate(product)

    }

    
    return (
        <>
         <div className="card-container ">
                {/* Image & Category Tag */}
                <div className="product-image-container">
                    <img src={product.image} alt={product.title} className="product-image" />
                    <span className="product-category">{product.category}</span>
                </div>

                {/* Product Info */}
                <div className="product-details">
                    <h2 className="product-title">{product.title}</h2>
                    <p className="product-description">{product.description}</p>

                    {/* Price & Rating Footer */}
                    <div className="product-footer">
                        <span className="product-price">${product.price.toFixed(2)}</span>
                        <div className="product-rating">
                           <button onClick={handleAddCart} className="border px-6 py-2">{addCart ? 'Added' : "Add to cart"}</button>
                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}

