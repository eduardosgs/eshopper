import React, { Component } from 'react'
import MenuCategoria from '../components/MenuCategoria'
import api from '../services/api'
import img from '../utils/img'




class Products extends Component {



	state = {
		category: [],
		product: []
	};
	componentDidMount() {
		this.loadCategory();
		this.loadProduct();
	}

	loadProduct = async () => {
		const response = await api.get('/produtos');
		this.setState({ product: response.data.produtos });;

	}

	loadCategory = async () => {
		const response = await api.get('/categoria');
		this.setState({ category: response.data.categoria });



	}

	render() {
		return (
			<div>
				{
					this.state.product.map(products => (

						<>

							<div className="product-image-wrapper" key={products.id}>

								<div className="single-products">
									<div className="productinfo text-center">
										{img(this.state.category, this.state.product)}
										<img src="" alt="" id="minhaImagem" />

										<h2>{"$" + products.preco}</h2>
										<p>{products.nomeproduto}</p>
										<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
									</div>
									<div className="product-overlay">
										<div className="overlay-content">

											<h2>{"$" + products.preco}</h2>
											<p>{products.nomeproduto}</p>
											<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
										</div>
									</div>
								</div>
								<div className="choose">
									<ul className="nav nav-pills nav-justified">
										<li><a href="#"><i className="fa fa-plus-square"></i>Add to wishlist</a></li>
										<li><a href="#"><i className="fa fa-plus-square"></i>Add to compare</a></li>
									</ul>
								</div>
							</div>
						</>

					))
				}
			</div>
		)

	}
}
class Container extends Component {

	constructor(props) {
		super(props);
		this.state = {
			date: new Date(),
			products: null,
			isLoaded: false
		};
	}

	render() {

		// const reptiles = ['alligator', 'snake', 'lizard'];
		// console.log(t)
		// let durationBody = t.map((item, i) => {
		// 	return (
		// 		<span key={i} value={item}>
		// 		{item}
		// 		</span>
		// 	);
		// });

		return (
			<section>
				<div className="container">
					<div className="row">
						<div className="col-sm-3">
							<MenuCategoria />
						</div>

						<div className="col-sm-9 padding-right">
							<div className="features_items">
								<h2 className="title text-center">Features Items</h2>
								<div className="col-sm-4">
									{<Products />}
								</div>
							</div>



							<div className="recommended_items">
								<h2 className="title text-center">recommended items</h2>

								<div id="recommended-item-carousel" className="carousel slide" data-ride="carousel">
									<div className="carousel-inner">
										<div className="item active">
											<div className="col-sm-4">
												<div className="product-image-wrapper">
													<div className="single-products">
														<div className="productinfo text-center">
															<img src="images/home/recommend1.jpg" alt="" />
															<h2>$56</h2>
															<p>Easy Polo Black Edition</p>
															<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
														</div>

													</div>
												</div>
											</div>
											<div className="col-sm-4">
												<div className="product-image-wrapper">
													<div className="single-products">
														<div className="productinfo text-center">
															<img src="images/home/recommend2.jpg" alt="" />
															<h2>$56</h2>
															<p>Easy Polo Black Edition</p>
															<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
														</div>

													</div>
												</div>
											</div>
											<div className="col-sm-4">
												<div className="product-image-wrapper">
													<div className="single-products">
														<div className="productinfo text-center">
															<img src="images/home/recommend3.jpg" alt="" />
															<h2>$56</h2>
															<p>Easy Polo Black Edition</p>
															<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
														</div>

													</div>
												</div>
											</div>
										</div>
										<div className="item">
											<div className="col-sm-4">
												<div className="product-image-wrapper">
													<div className="single-products">
														<div className="productinfo text-center">
															<img src="images/home/recommend1.jpg" alt="" />
															<h2>$56</h2>
															<p>Easy Polo Black Edition</p>
															<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
														</div>

													</div>
												</div>
											</div>
											<div className="col-sm-4">
												<div className="product-image-wrapper">
													<div className="single-products">
														<div className="productinfo text-center">
															<img src="images/home/recommend2.jpg" alt="" />
															<h2>$56</h2>
															<p>Easy Polo Black Edition</p>
															<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
														</div>

													</div>
												</div>
											</div>
											<div className="col-sm-4">
												<div className="product-image-wrapper">
													<div className="single-products">
														<div className="productinfo text-center">
															<img src="images/home/recommend3.jpg" alt="" />
															<h2>$56</h2>
															<p>Easy Polo Black Edition</p>
															<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
														</div>

													</div>
												</div>
											</div>
										</div>
									</div>
									<a className="left recommended-item-control" href="#recommended-item-carousel" data-slide="prev">
										<i className="fa fa-angle-left"></i>
									</a>
									<a className="right recommended-item-control" href="#recommended-item-carousel" data-slide="next">
										<i className="fa fa-angle-right"></i>
									</a>
								</div>
							</div>

						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Container