import React, { useState } from 'react';
import "./Products.scss";
import List from '../../components/List/List';
import { useLocation } from 'react-router-dom';

const Products = () => {
    const location = useLocation();
    const category = location.pathname.split("/")[2];

    const [maxPrice, setMaxPrice] = useState(0);
    const [sort, setSort] = useState(null);
    const [selectedSubCats, setSelectedSubCats] = useState([]);

    

    return (
        <div className="products">
        <div className="left">
            <div className="filterItem">
            <h2>Product Categories</h2>
            <div className="inputItem">
                <input type="checkbox" id='1' value={1}/>
                <label htmlFor="1">Shoes</label>
            </div>
            <div className="inputItem">
                <input type="checkbox" id='2' value={2}/>
                <label htmlFor="2">Skirts</label>
            </div>
            <div className="inputItem">
                <input type="checkbox" id='3' value={3}/>
                <label htmlFor="3">Coats</label>
            </div>
            </div>
            <div className="filterItem">
            <h2>Filter by price</h2>
            <div className="inputItem">
                <span>0 </span>
                <input type="range" min={0} max={1000} onChange={(e)=>setMaxPrice(e.target.value)}/>
                <span>{maxPrice}</span>
            </div>
            </div>
            <div className="filterItem">
            <h2>Sort by</h2>
            <div className="inputItem">
                <input type="radio" id='asc' value='asc' name='price' onChange={e=>setSort("asc")}/>
                <label htmlFor="asc">Price Lowest first</label>
            </div>
            <div className="inputItem">
                <input type="radio" id='desc' value='desc' name='price' onChange={e=>setSort("desc")}/>
                <label htmlFor="desc">Price Highest first</label>
            </div>
            </div>
        </div>
        <div className="right">
            <img className='catImg' src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <List category={category} maxPrice={maxPrice} sort={sort} selectedSubCats={selectedSubCats}/>
        </div>
        </div>
    )
}

export default Products