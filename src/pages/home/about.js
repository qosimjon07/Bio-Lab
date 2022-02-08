import { Link } from "react-router-dom";
import Doctor from "../../images/doctorMale.png";

function MainAbout() {
	return (
		<div className="">
			<div className="container grid grid-cols-1 md:grid-cols-2">
				<div className="pr-8 py-10 flex flex-col justify-center">
					<div className="w-16 border-b-2 border-orange-500"></div>
					<div className="flex flex-col gap-3">
						<p className="text-4xl font-medium">About the center</p>
						<p className="line-clamp-4">
							Our company's main goal is supplying the best to our customers. With this goal our company has been established in 2019 by a group of professionals and surgeons. One of worlds economic
							hubs, London has been chosen to be our head office location. In a short time, we have gathered marketing sales teams in Tashkent(Uzbekistan) and Shymkent(Kazakhstan).
						</p>
						<p className="line-clamp-4">
							In 2020, we have opened our representative offices. In the same year, U.S.IOL has signed partnership contract, meanwhile, Labtronics has become our partner company. Meanwhile, we have
							signed partnership agreements with a total of 45 public and private clinics, 3 opticians in Uzbekistan and 18 in Kazakhstan.
						</p>
						<Link to={"/about"}>
							<button className="text-lg shadow mt-3 px-8 py-1 rounded-full buttonBg text-white">Read more</button>
						</Link>
					</div>
				</div>
				<div className="">
					<img src={Doctor} width="100%" alt="" />
				</div>
			</div>
		</div>
	);
}

export default MainAbout;
