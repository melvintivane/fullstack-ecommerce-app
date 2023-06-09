import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"; 
import { useDispatch, useSelector } from "react-redux";
import { removerItem, resetCart } from "../../redux/cartReducer";


const Cart = () => {

    const cart = useSelector((state) => state.cart);
    const total = useSelector((state) => state.cart.total);

    const dispatch = useDispatch();

    const totalPrice = () => {
        let total = 0;
        products.forEach((item) => {
        total += item.quantity * item.price;
        });
        return total.toFixed(2);
    };


    return ( 
        <div className="parent">
            <h1>Products in your cart</h1>
            <div className="cart">              
                    {cart.products?.map(product=>(
                        <div className="item" key={product._id}>
                            <img src={product.image1} alt="" />
                            <div className="details">
                                <h1>{product.title}</h1>
                                <p>{product.description.substring(0, 100)}</p>
                                <div className="price">{product.quantity} x $ {product.price}</div>
                            </div>
                            <DeleteOutlinedIcon className="delete" onClick={() => dispatch(removerItem(product._id))}/>
                        </div>
                    ))}   
            </div>
            <div className="total">
                <span>SUBTOTAL</span>
                <span className='price'>$ {total}</span>
                <button>PROCEED TO CHECKOUT</button>
                <span className="reset" onClick={() => dispatch(resetCart())}>
                    Reset cart
                </span>
            </div>  
        </div>       
    )
}

export default Cart