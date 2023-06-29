import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss"
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const Navbar = () => {

	const [open, setOpen] = useState(false);
  const quantidade = useSelector((state) => state.cart.quantidade);
  const user = useSelector((state) => state.usuario.currentUser);

  console.log(user);


  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
           <div className="item">
            <img src="/img/en.png" alt="" />
            {/* <KeyboardArrowDownIcon/> */}
           </div>
           <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className ="link" to="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/2">Men</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/3">Children</Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">KRUPPSTORE</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className ="link" to="/">Homepage</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/">About</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/">Contact</Link>
          </div>
          {/* Condição adicionada para mostrar o Link de login ou o nome do usuário */}
          {user === null || user === undefined ? (
            <div className="item">
              <Link className="link" to="/login">
                Login
              </Link>
            </div>
          ) : (
            <div className="item usuario">
              <span>{user?.name}</span>
            </div>
          )}
          <div className="icons">
            <PersonOutlineOutlinedIcon/>
            <SearchIcon/>
            <FavoriteBorderOutlinedIcon/>
            <div className="cartIcon" onClick={()=> setOpen(!open)}>
              <ShoppingCartOutlinedIcon/>
              <span>{quantidade}</span>
            </div>
          </div>
        </div>
      </div>
	  {open && <Cart/>}
    </div>
  )
}

export default Navbar