import React from "react";
import './assets/css/index.css'

const Shop = (props) => {
    return (
        <div className="shop-card">
            <img className="shop-image" src={props.imgSrc}/>
            <h3>{props.shopName}</h3>
            <a href={props.shopLink} target="_blank">
                <button>View Shop</button>
            </a>
        </div>
    )
}

export default Shop;