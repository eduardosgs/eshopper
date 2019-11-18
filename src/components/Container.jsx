import React, { Component } from 'react'

function handleChange() {
    return true;
}

class Products extends Component {

	constructor(props) {
		super(props);
		this.state = {
			date: new Date(),
			products: null,
			isLoaded: false
		};
	}

	componentDidMount() {
		fetch('http://www.painel.supplementstore.com.br/public/api/produtos')
		.then(res => {
		if (res.ok) {
			return res.json();
		} else {
			throw Error(res.statusText);
		}
		})
		.then(json => {
		this.setState({
			products: json,
			isLoaded: true
		});
		});
	}

	render() {
		const { isLoaded, products } = this.state;

		if (!isLoaded) {
			return <div>Loading...</div>;
		} else {
			return (
				<div>
					{
						products.produtos.map(products => {
							return (
								<>
									<div className="product-image-wrapper" key={products.id}>
										{products.code}
										<p>{products.id}</p>
										<p>{products.categoria_id}</p>
										<p>{products.nomeproduto}</p>
										<p>{products.descricao}</p>
									</div>

									<div className="product-image-wrapper">
									<div className="single-products">
											<div className="productinfo text-center">
												<img src="images/home/product1.jpg" alt="" />
												<h2>$56</h2>
												<p>Easy Polo Black Edition</p>
												<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
											</div>
											<div className="product-overlay">
												<div className="overlay-content">
													<h2>$56</h2>
													<p>Easy Polo Black Edition</p>
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
							)
						})
					}
				</div>
			)
		}
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
							<div className="left-sidebar">
								<h2>Category - </h2>
								<div className="panel-group category-products" id="accordian">
									<div className="panel panel-default">
										<div className="panel-heading">
											<h4 className="panel-title">
												<a data-toggle="collapse" data-parent="#accordian" href="#sportswear">
													<span className="badge pull-right"><i className="fa fa-plus"></i></span>
													Sportswear
												</a>
											</h4>
										</div>
										<div id="sportswear" className="panel-collapse collapse">
											<div className="panel-body">
												<ul>
													<li><a href="#">Nike </a></li>
													<li><a href="#">Under Armour </a></li>
													<li><a href="#">Adidas </a></li>
													<li><a href="#">Puma</a></li>
													<li><a href="#">ASICS </a></li>
												</ul>
											</div>
										</div>
									</div>
									<div className="panel panel-default">
										<div className="panel-heading">
											<h4 className="panel-title">
												<a data-toggle="collapse" data-parent="#accordian" href="#mens">
													<span className="badge pull-right"><i className="fa fa-plus"></i></span>
													Mens
												</a>
											</h4>
										</div>
										<div id="mens" className="panel-collapse collapse">
											<div className="panel-body">
												<ul>
													<li><a href="#">Fendi</a></li>
													<li><a href="#">Guess</a></li>
													<li><a href="#">Valentino</a></li>
													<li><a href="#">Dior</a></li>
													<li><a href="#">Versace</a></li>
													<li><a href="#">Armani</a></li>
													<li><a href="#">Prada</a></li>
													<li><a href="#">Dolce and Gabbana</a></li>
													<li><a href="#">Chanel</a></li>
													<li><a href="#">Gucci</a></li>
												</ul>
											</div>
										</div>
									</div>
									
									<div className="panel panel-default">
										<div className="panel-heading">
											<h4 className="panel-title">
												<a data-toggle="collapse" data-parent="#accordian" href="#womens">
													<span className="badge pull-right"><i className="fa fa-plus"></i></span>
													Womens
												</a>
											</h4>
										</div>
										<div id="womens" className="panel-collapse collapse">
											<div className="panel-body">
												<ul>
													<li><a href="#">Fendi</a></li>
													<li><a href="#">Guess</a></li>
													<li><a href="#">Valentino</a></li>
													<li><a href="#">Dior</a></li>
													<li><a href="#">Versace</a></li>
												</ul>
											</div>
										</div>
									</div>
									<div className="panel panel-default">
										<div className="panel-heading">
											<h4 className="panel-title"><a href="#">Kids</a></h4>
										</div>
									</div>
									<div className="panel panel-default">
										<div className="panel-heading">
											<h4 className="panel-title"><a href="#">Fashion</a></h4>
										</div>
									</div>
									<div className="panel panel-default">
										<div className="panel-heading">
											<h4 className="panel-title"><a href="#">Households</a></h4>
										</div>
									</div>
									<div className="panel panel-default">
										<div className="panel-heading">
											<h4 className="panel-title"><a href="#">Interiors</a></h4>
										</div>
									</div>
									<div className="panel panel-default">
										<div className="panel-heading">
											<h4 className="panel-title"><a href="#">Clothing</a></h4>
										</div>
									</div>
									<div className="panel panel-default">
										<div className="panel-heading">
											<h4 className="panel-title"><a href="#">Bags</a></h4>
										</div>
									</div>
									<div className="panel panel-default">
										<div className="panel-heading">
											<h4 className="panel-title"><a href="#">Shoes</a></h4>
										</div>
									</div>
								</div>
							
								<div className="brands_products">
									<h2>Brands</h2>
									<div className="brands-name">
										<ul className="nav nav-pills nav-stacked">
											<li><a href="#"> <span className="pull-right">(50)</span>Acne</a></li>
											<li><a href="#"> <span className="pull-right">(56)</span>Grüne Erde</a></li>
											<li><a href="#"> <span className="pull-right">(27)</span>Albiro</a></li>
											<li><a href="#"> <span className="pull-right">(32)</span>Ronhill</a></li>
											<li><a href="#"> <span className="pull-right">(5)</span>Oddmolly</a></li>
											<li><a href="#"> <span className="pull-right">(9)</span>Boudestijn</a></li>
											<li><a href="#"> <span className="pull-right">(4)</span>Rösch creative culture</a></li>
										</ul>
									</div>
								</div>
								
								<div className="price-range">
									<h2>Price Range</h2>
									<div className="well text-center">
										<input type="text" className="span2" onChange={handleChange} value="" data-slider-min="0" data-slider-max="600" data-slider-step="5" data-slider-value="[250,450]" id="sl2" /><br />
										<b className="pull-left">$ 0</b> <b className="pull-right">$ 600</b>
									</div>
								</div>
								
								<div className="shipping text-center">
									<img src="images/home/shipping.jpg" alt="" />
								</div>
							
							</div>
						</div>
						
						<div className="col-sm-9 padding-right">
							<div className="features_items">
								<h2 className="title text-center">Features Items</h2>
								<div className="col-sm-4">
									{<Products />}
								</div>
								<div className="col-sm-4">
									<div className="product-image-wrapper">
										<div className="single-products">
												<div className="productinfo text-center">
													<img src="images/home/product1.jpg" alt="" />
													<h2>$56</h2>
													<p>Easy Polo Black Edition</p>
													<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
												</div>
												<div className="product-overlay">
													<div className="overlay-content">
														<h2>$56</h2>
														<p>Easy Polo Black Edition</p>
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
								</div>
								<div className="col-sm-4">
									<div className="product-image-wrapper">
										<div className="single-products">
											<div className="productinfo text-center">
												<img src="images/home/product2.jpg" alt="" />
												<h2>$56</h2>
												<p>Easy Polo Black Edition</p>
												<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
											</div>
											<div className="product-overlay">
												<div className="overlay-content">
													<h2>$56</h2>
													<p>Easy Polo Black Edition</p>
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
								</div>
								<div className="col-sm-4">
									<div className="product-image-wrapper">
										<div className="single-products">
											<div className="productinfo text-center">
												<img src="images/home/product3.jpg" alt="" />
												<h2>$56</h2>
												<p>Easy Polo Black Edition</p>
												<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
											</div>
											<div className="product-overlay">
												<div className="overlay-content">
													<h2>$56</h2>
													<p>Easy Polo Black Edition</p>
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
								</div>
								<div className="col-sm-4">
									<div className="product-image-wrapper">
										<div className="single-products">
											<div className="productinfo text-center">
												<img src="images/home/product4.jpg" alt="" />
												<h2>$56</h2>
												<p>Easy Polo Black Edition</p>
												<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
											</div>
											<div className="product-overlay">
												<div className="overlay-content">
													<h2>$56</h2>
													<p>Easy Polo Black Edition</p>
													<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
												</div>
											</div>
											<img src="images/home/new.png" className="new" alt="" />
										</div>
										<div className="choose">
											<ul className="nav nav-pills nav-justified">
												<li><a href="#"><i className="fa fa-plus-square"></i>Add to wishlist</a></li>
												<li><a href="#"><i className="fa fa-plus-square"></i>Add to compare</a></li>
											</ul>
										</div>
									</div>
								</div>
								<div className="col-sm-4">
									<div className="product-image-wrapper">
										<div className="single-products">
											<div className="productinfo text-center">
												<img src="images/home/product5.jpg" alt="" />
												<h2>$56</h2>
												<p>Easy Polo Black Edition</p>
												<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
											</div>
											<div className="product-overlay">
												<div className="overlay-content">
													<h2>$56</h2>
													<p>Easy Polo Black Edition</p>
													<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
												</div>
											</div>
											<img src="images/home/sale.png" className="new" alt="" />
										</div>
										<div className="choose">
											<ul className="nav nav-pills nav-justified">
												<li><a href="#"><i className="fa fa-plus-square"></i>Add to wishlist</a></li>
												<li><a href="#"><i className="fa fa-plus-square"></i>Add to compare</a></li>
											</ul>
										</div>
									</div>
								</div>
								<div className="col-sm-4">
									<div className="product-image-wrapper">
										<div className="single-products">
											<div className="productinfo text-center">
												<img src="images/home/product6.jpg" alt="" />
												<h2>$56</h2>
												<p>Easy Polo Black Edition</p>
												<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
											</div>
											<div className="product-overlay">
												<div className="overlay-content">
													<h2>$56</h2>
													<p>Easy Polo Black Edition</p>
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
								</div>
								
							</div>
							
							<div className="category-tab">
								<div className="col-sm-12">
									<ul className="nav nav-tabs">
										<li className="active"><a href="#tshirt" data-toggle="tab">T-Shirt</a></li>
										<li><a href="#blazers" data-toggle="tab">Blazers</a></li>
										<li><a href="#sunglass" data-toggle="tab">Sunglass</a></li>
										<li><a href="#kids" data-toggle="tab">Kids</a></li>
										<li><a href="#poloshirt" data-toggle="tab">Polo shirt</a></li>
									</ul>
								</div>
								<div className="tab-content">
									<div className="tab-pane fade active in" id="tshirt" >
										<div className="col-sm-3">
											<div className="product-image-wrapper">
												<div className="single-products">
													<div className="productinfo text-center">
														<img src="images/home/gallery1.jpg" alt="" />
														<h2>$56</h2>
														<p>Easy Polo Black Edition</p>
														<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
													</div>
													
												</div>
											</div>
										</div>
										<div className="col-sm-3">
											<div className="product-image-wrapper">
												<div className="single-products">
													<div className="productinfo text-center">
														<img src="images/home/gallery2.jpg" alt="" />
														<h2>$56</h2>
														<p>Easy Polo Black Edition</p>
														<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
													</div>
													
												</div>
											</div>
										</div>
										<div className="col-sm-3">
											<div className="product-image-wrapper">
												<div className="single-products">
													<div className="productinfo text-center">
														<img src="images/home/gallery3.jpg" alt="" />
														<h2>$56</h2>
														<p>Easy Polo Black Edition</p>
														<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
													</div>
													
												</div>
											</div>
										</div>
										<div className="col-sm-3">
											<div className="product-image-wrapper">
												<div className="single-products">
													<div className="productinfo text-center">
														<img src="images/home/gallery4.jpg" alt="" />
														<h2>$56</h2>
														<p>Easy Polo Black Edition</p>
														<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
													</div>
													
												</div>
											</div>
										</div>
									</div>
									
									<div className="tab-pane fade" id="blazers" >
										<div className="col-sm-3">
											<div className="product-image-wrapper">
												<div className="single-products">
													<div className="productinfo text-center">
														<img src="images/home/gallery4.jpg" alt="" />
														<h2>$56</h2>
														<p>Easy Polo Black Edition</p>
														<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
													</div>
													
												</div>
											</div>
										</div>
										<div className="col-sm-3">
											<div className="product-image-wrapper">
												<div className="single-products">
													<div className="productinfo text-center">
														<img src="images/home/gallery3.jpg" alt="" />
														<h2>$56</h2>
														<p>Easy Polo Black Edition</p>
														<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
													</div>
													
												</div>
											</div>
										</div>
										<div className="col-sm-3">
											<div className="product-image-wrapper">
												<div className="single-products">
													<div className="productinfo text-center">
														<img src="images/home/gallery2.jpg" alt="" />
														<h2>$56</h2>
														<p>Easy Polo Black Edition</p>
														<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
													</div>
													
												</div>
											</div>
										</div>
										<div className="col-sm-3">
											<div className="product-image-wrapper">
												<div className="single-products">
													<div className="productinfo text-center">
														<img src="images/home/gallery1.jpg" alt="" />
														<h2>$56</h2>
														<p>Easy Polo Black Edition</p>
														<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
													</div>
													
												</div>
											</div>
										</div>
									</div>
									
									<div className="tab-pane fade" id="sunglass" >
										<div className="col-sm-3">
											<div className="product-image-wrapper">
												<div className="single-products">
													<div className="productinfo text-center">
														<img src="images/home/gallery3.jpg" alt="" />
														<h2>$56</h2>
														<p>Easy Polo Black Edition</p>
														<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
													</div>
													
												</div>
											</div>
										</div>
										<div className="col-sm-3">
											<div className="product-image-wrapper">
												<div className="single-products">
													<div className="productinfo text-center">
														<img src="images/home/gallery4.jpg" alt="" />
														<h2>$56</h2>
														<p>Easy Polo Black Edition</p>
														<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
													</div>
													
												</div>
											</div>
										</div>
										<div className="col-sm-3">
											<div className="product-image-wrapper">
												<div className="single-products">
													<div className="productinfo text-center">
														<img src="images/home/gallery1.jpg" alt="" />
														<h2>$56</h2>
														<p>Easy Polo Black Edition</p>
														<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
													</div>
													
												</div>
											</div>
										</div>
										<div className="col-sm-3">
											<div className="product-image-wrapper">
												<div className="single-products">
													<div className="productinfo text-center">
														<img src="images/home/gallery2.jpg" alt="" />
														<h2>$56</h2>
														<p>Easy Polo Black Edition</p>
														<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
													</div>
													
												</div>
											</div>
										</div>
									</div>
									
									<div className="tab-pane fade" id="kids" >
										<div className="col-sm-3">
											<div className="product-image-wrapper">
												<div className="single-products">
													<div className="productinfo text-center">
														<img src="images/home/gallery1.jpg" alt="" />
														<h2>$56</h2>
														<p>Easy Polo Black Edition</p>
														<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
													</div>
													
												</div>
											</div>
										</div>
										<div className="col-sm-3">
											<div className="product-image-wrapper">
												<div className="single-products">
													<div className="productinfo text-center">
														<img src="images/home/gallery2.jpg" alt="" />
														<h2>$56</h2>
														<p>Easy Polo Black Edition</p>
														<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
													</div>
													
												</div>
											</div>
										</div>
										<div className="col-sm-3">
											<div className="product-image-wrapper">
												<div className="single-products">
													<div className="productinfo text-center">
														<img src="images/home/gallery3.jpg" alt="" />
														<h2>$56</h2>
														<p>Easy Polo Black Edition</p>
														<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
													</div>
													
												</div>
											</div>
										</div>
										<div className="col-sm-3">
											<div className="product-image-wrapper">
												<div className="single-products">
													<div className="productinfo text-center">
														<img src="images/home/gallery4.jpg" alt="" />
														<h2>$56</h2>
														<p>Easy Polo Black Edition</p>
														<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
													</div>
													
												</div>
											</div>
										</div>
									</div>
									
									<div className="tab-pane fade" id="poloshirt" >
										<div className="col-sm-3">
											<div className="product-image-wrapper">
												<div className="single-products">
													<div className="productinfo text-center">
														<img src="images/home/gallery2.jpg" alt="" />
														<h2>$56</h2>
														<p>Easy Polo Black Edition</p>
														<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
													</div>
													
												</div>
											</div>
										</div>
										<div className="col-sm-3">
											<div className="product-image-wrapper">
												<div className="single-products">
													<div className="productinfo text-center">
														<img src="images/home/gallery4.jpg" alt="" />
														<h2>$56</h2>
														<p>Easy Polo Black Edition</p>
														<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
													</div>
													
												</div>
											</div>
										</div>
										<div className="col-sm-3">
											<div className="product-image-wrapper">
												<div className="single-products">
													<div className="productinfo text-center">
														<img src="images/home/gallery3.jpg" alt="" />
														<h2>$56</h2>
														<p>Easy Polo Black Edition</p>
														<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
													</div>
													
												</div>
											</div>
										</div>
										<div className="col-sm-3">
											<div className="product-image-wrapper">
												<div className="single-products">
													<div className="productinfo text-center">
														<img src="images/home/gallery1.jpg" alt="" />
														<h2>$56</h2>
														<p>Easy Polo Black Edition</p>
														<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
													</div>
													
												</div>
											</div>
										</div>
									</div>
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