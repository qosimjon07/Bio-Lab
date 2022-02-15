/** @format */

import { Link } from "react-router-dom";
import Doctor from "../../images/doctorMale.png";

function MainAbout() {
	return (
		<div className="container mb-120" >
			<div className="mainAbout lg:grid">
				<div className="mainAbout-title-div flex flex-col justify-center mb-10 lg:mb-0">
					<div className="titleTop"></div>
					<div className="flex flex-col mainAbout-title-div-box">
						<p className="mainAbout-title-div__title">About the center</p>
						<p className="mainAbout-title-div__text line-clamp-5">
							Our company's main goal is supplying the best to our customers. With this goal our company has been established in 2019 by a group of professionals and surgeons. One of worlds economic
							hubs, London has been chosen to be our head office location. In a short time, we have gathered marketing sales teams in Tashkent(Uzbekistan) and Shymkent(Kazakhstan).
						</p>
						<p className="mainAbout-title-div__text line-clamp-5">
							In 2020, we have opened our representative offices. In the same year, U.S.IOL has signed partnership contract, meanwhile, Labtronics has become our partner company. Meanwhile, we have
							signed partnership agreements with a total of 45 public and private clinics, 3 opticians in Uzbekistan and 18 in Kazakhstan.
						</p>
						<Link to={"/about"}>
							<button className="mainAbout-title-div__button">Read more</button>
						</Link>
					</div>
				</div>
				<div className="mainAbout-img mx-auto">
					<img src={Doctor} width="100%" alt="" />
				</div>
			</div>
		</div>
	);
}

export default MainAbout;
