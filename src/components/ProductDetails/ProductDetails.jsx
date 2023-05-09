import React, { useEffect, useState } from 'react'
import "./ProductDetails.css";
import { Link, useParams } from 'react-router-dom';
import { getProductId } from '../ApiService/api';
function ProductDetails() {

    const {id}=useParams();
    const [productDetails, setProductDetails] = useState({})

    useEffect(() => {

        const fetchProductDetails = async ()=>{
            const data = await getProductId(id);
            setProductDetails(data)
        }
        fetchProductDetails()
    }, [id])
    
 const handleBuyNow=()=>{
    window.confirm("The product is out of stock")
 }
  return (
    <div className='container'>
        <div className="product-details ">
          <img
            src={productDetails.image}
            alt={productDetails.title}
            className="product_image"
          />
          <div className="product-info">
            <h2 className="product_title">{productDetails.title}</h2>
            <p className="product-discription">{productDetails.description}</p>
            <p className="product_price">${productDetails.price}</p>
            <div className='product_btn' style={{display:'flex', gap:'20px'}}>
                <button className="buy-now-button" onClick={handleBuyNow}>
                  Buy Now
                </button>
                <Link to={"/"}>
                  <button className="go_back_home"> Go Back</button>
                </Link>
            </div>
          </div>
        </div>
    </div>
  );
}

export default ProductDetails