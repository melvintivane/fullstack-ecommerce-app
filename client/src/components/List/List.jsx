import React, { useEffect, useState } from 'react';
import "./List.scss";
import Card from "../Card/Card";
import { publicRequest } from '../../requestMethods';

const List = ({category, sort, selectedSubCats, maxPrice}) => {

	const [products, setProducts] = useState([]);
	console.log(sort, selectedSubCats, maxPrice);

	useEffect(() => {
		const getProducts = async () => {
		  try {
			const res = await publicRequest.get( category ? `/products?category=${category}` : "/products" );
			setProducts(res.data);
		  } catch (error) {
			console.log(error);
		  }
		};
		getProducts();
	}, [category]); 

    return (
        <div className="list">
            {products?.map( item=> (
                <Card item={item} key={item._id}/>
            ))}
        </div>
    )
}

export default List;