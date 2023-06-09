import React, { useEffect, useState } from 'react';
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { useLocation } from 'react-router-dom';
import { publicRequest } from '../../requestMethods';
import { useDispatch } from 'react-redux';
import { adicionarAoCart } from '../../redux/cartReducer';


const Product = () => {

	const location = useLocation();
  	const id = location.pathname.split("/")[2];
	const [selectedImg, setSelectedImg] = useState("img");
	const [quantity, setQuantity] = useState(1);
	const [product, setProduct] = useState({});
	const dispatch = useDispatch();


	useEffect(() => {
		const getProduct = async () => {
			try {
				const res = await publicRequest.get("/products/" + id);
				setProduct(res.data);
			} catch {}
		};
		getProduct();
	}, [id]);


	const handleClick = () => {
		dispatch(
			adicionarAoCart({ ...product, quantity })
		);
	};


	return (
		<div className="product">
			<div className="left">
				<div className="images">
					<img src={product.image1} alt="" onClick={() => setSelectedImg("img")} />			
					<img src={product.image2} alt="" onClick={() => setSelectedImg("img2")} />
				</div>
				<div className="mainImg">
					<img src={selectedImg === "img" ? product.image1 : product.image2} alt="" srcSet="" />
				</div>
			</div>
			<div className="right"> 
				<h1>{product.title}</h1>
				<span className='price'>$ {product.price}</span>
				<p>{product.description}</p>
				<div className="quantity">
					<button onClick={()=> setQuantity((prev) => prev == 1 ? 1 : prev - 1)}>-</button>
					{quantity}
					<button onClick={()=> setQuantity((prev) => prev + 1)}>+</button>
				</div>
				<button className='add'	onClick={handleClick}>
					<AddShoppingCartIcon/> ADD TO CART
				</button>
				<div className="links">
					<div className="item">
						<FavoriteBorderIcon /> ADD TO WISH LIST
					</div>
					<div className="item">
						<BalanceIcon /> ADD TO COMPARE
					</div>
				</div>
				<hr />
				<div className="info">
					<span>Vendor: Polo</span>
					<span>Product Type: T-Shirt</span>
					<span>Tag: T-Shirt, Women, Top</span>
				</div>
			</div>
		</div>
	)
}

export default Product;