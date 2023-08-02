import React, { useState, useEffect } from 'react';
import "./FeaturedProducts.scss";
import Card from '../Card/Card';
import { publicRequest } from '../../requestMethods';


const FeaturedProducts = ({type, slug}) => {
	
	const [products, setProducts] = useState([]);
	
	useEffect(() => {
		const getProduct = async () => {
		  try {
			const res = await publicRequest.get(`/products?type=${slug}`);
			setProducts(res.data);
		  } catch {}
		};
		getProduct();
	  }, []);


	return (
		<div className='featuredProducts'>
			<div className="top">
				<h1>{type} Products</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
					suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
					lacus vel facilisis labore et dolore magna aliqua.
				</p>
			</div>
			<div className="bottom">
				{products.slice(0, 5).map((item) => (
					<Card item={item} key={item._id}/>
				))}

			</div>
		</div>
	)
}

export default FeaturedProducts;