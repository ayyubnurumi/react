import React, {Component, Fragment} from "react";
import "../Product/Product.css"
import Troley from "../Product/Troley.jpg"

class Product extends Component {
    render (){
        return(
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/jznhmlcmc5dia2qrmc7r" alt="logo"/>
                    </div>
                    <div className="troley">
                        <img src={Troley} alt="troley"/>
                        <div className="count">3</div>
                    </div>
                </div>
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src="https://jualayamhias.com/wp-content/uploads/2017/12/Cemani-chicken-e1513914416319.jpg" alt="ayam kecap"/>
                    </div>
                    <p className="product-title">ayam bumbu kecap</p>
                    <p className="product-price">Rp 500</p>
                    <div className="counter">
                        <button className="minus">-</button>
                        <input type="text" value={3}/>
                        <button className="plus">+</button>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Product;