import React from 'react';
import { Link } from "react-router-dom";
import "./Card.scss"



const Card = ({item}) => {

  return (
    <Link className='link' to={`/product/${item._id}`}>
        <div className="card">
            <div className="image">
                {item?.is_New && <span>New Season</span>}
                <img src={item.image1} alt="" className="mainImg" />
                <img src={item.image2} alt="" className="secondImg" /> 
            </div>
            <h2>{item.title}</h2>
            <div className="prices">
                <h3>$  {item?.oldPrice || item?.price + 35}</h3>
                <h3>$  {item?.price}</h3>
            </div>
        </div>
    </Link>
  )
}

export default Card;