import React from "react";
import "./User.scss";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userReducer";
import { resetCart } from "../../redux/cartReducer";


const User = () => {
    const user = useSelector((state) => state.usuario.currentUser);
    const dispatch = useDispatch();

    function Logout() {
        dispatch(logout());
        dispatch(resetCart());
        window.location.reload();
    }

    return ( 
        <div className="userContainer">
            <h1>User Information</h1>
            <div className="user">                
                {/* <img src={product.image1} alt="" /> */}
                <div className="details">
                    <p>{user?.username}</p>
                    <p>{user?.email}</p>
                </div>
            </div>
            <button onClick={Logout}>SIGN OUT</button>
        </div>       
    )
}

export default User