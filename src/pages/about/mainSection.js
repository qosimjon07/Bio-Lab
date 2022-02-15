import Doctor2 from "../../images/doctor2.png";

function MainSection() {
	return (
		<div className="desktop mb-120">
			<div className="container grid grid-cols-1 lg:grid-cols-2 items-center">
				<div className="flex flex-col justify-center">
					<div className="titleTop"></div>
					<div className="about-main-box">
						<p className="about-main-title">About the center</p>
						<p className="about-main-text">
							Our company's main goal is supplying the best to our customers. With this goal our company has been established in 2019 by a group of professionals and surgeons. One of worlds economic
							hubs, London has been chosen to be our head office location. In a short time, we have gathered marketing sales teams in Tashkent(Uzbekistan) and Shymkent(Kazakhstan).
						</p>
						<p className="about-main-text">
							In 2020, we have opened our representative offices. In the same year, U.S.IOL has signed partnership contract, meanwhile, Labtronics has become our partner company. Meanwhile, we have
							signed partnership agreements with a total of 45 public and private clinics, 3 opticians in Uzbekistan and 18 in Kazakhstan. In 2021, a few European and American distributor companies
							has been merged to our country, giving the opportunity to get in touch with our prospective companies directly.
						</p>
						<p className="about-main-text">
							Since the establishment of our company, we have done more than 1000 surgeries on our patients, more than 5000 lenses have been distributed to our partner clinics several laboratories has
							been equipped exclusively by us and prospective representative offices establishment plans has entered our future plans.
						</p>
					</div>
				</div>
				<div className="mx-auto">
					<img className="w-full h-full object-cover" src={Doctor2} alt="img" />
				</div>
			</div>
		</div>
	);
}

export default MainSection;