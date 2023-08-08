import React from "react";
import vg from "../assets/2.webp";
import {
	AiFillGoogleCircle,
	AiFillAmazonCircle,
	AiFillInstagram,
	AiFillYoutube,
} from "react-icons/ai";

const Home = () => {
	return (
		<>
			<div className="home" id="home">
				<main>
					<h1>Noels</h1>
					<p>Solution to all you problems</p>
				</main>
			</div>

			<div className="home2">
				<img src={vg} alt="Graphics" />
				<div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus aut,
						ut deleniti animi repellendus similique aspernatur ipsa temporibus?
						Aliquid praesentium distinctio consequatur.
					</p>
				</div>
			</div>

			<div className="home3" id="about">
				<div>
					<h1>Who are we?</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odio
						itaque tenetur voluptas impedit adipisci consectetur officiis
						suscipit facere! Error, dolorum eius. Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Vel odio itaque tenetur voluptas
						impedit adipisci consectetur officiis suscipit facere! Error,
						dolorum eius. Lorem ipsum dolor sit amet consectetur adipisicing
						elit. Vel odio itaque tenetur voluptas impedit adipisci consectetur
						officiis suscipit facere! Error, dolorum eius. Lorem ipsum dolor sit
						amet consectetur adipisicing elit. Vel odio itaque tenetur
					</p>
				</div>
			</div>

			<div className="home4" id="brands">
				<div>
					<h1>Brands</h1>
					<article>
						<div style={{
              animationDelay: '0.3s',
            }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

						<div style={{
              animationDelay: '0.5s',
            }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>

						<div style={{
              animationDelay: '0.7s',
            }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

						<div style={{
              animationDelay: '1s',
            }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

					</article>
				</div>
			</div>
		</>
	);
};

export default Home;
