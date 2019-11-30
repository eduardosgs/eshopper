import React from 'react'

const Footer = () => {

	return (
		<footer id="footer">
			<div className="footer-top">
				<div className="container">
					<div className="row">
						<div className="col-sm-2">
							<div className="companyinfo">
								<h2><span>suplements</span>tore</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor</p>
							</div>
						</div>
						<div className="col-sm-7">



						</div>
						<div className="col-sm-3">
							<div className="address">
								<img src="images/home/map.png" alt="" />
								<p>505 S Atlantic Ave Virginia Beach, VA(Virginia)</p>
							</div>
						</div>
					</div>
				</div>
			</div>



			<div className="footer-bottom">
				<div className="container">
					<div className="row">
						<p className="pull-left">Copyright © 2019 SUPPLEMENTSTORE Inc. All rights reserved.</p>
						<p className="pull-right">Designed by <span><a target="_blank" href="http://www.themeum.com">Themeum</a></span></p>
					</div>
				</div>
			</div>

		</footer>
	)
}

export default Footer