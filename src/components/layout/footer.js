import LogoImg from "../../images/light logo.png";
import Telegram from "../../images/telegram.png";
import Instagram from "../../images/instagram.png";
import Facebook from "../../images/facebook.png";
import Youtube from "../../images/youtube.png";

function Footer() {
	return (
		<div className="text-gray-600 bg-teal-500 p-10">
			<div className="grid md:grid-cols-5 gap-5">
				<div className="md:flex justify-around gap-5 col-span-2">
					<div className="space-y-8">
						<img className="h-8 w-auto sm:h-10" src={LogoImg} alt="logo" />
						<nav className="list-none text-lg space-y-8">
							<li>
								<div className="space-y-2">
									<p className="text-white">We are in social networks</p>
									<div className="flex space-x-3">
										<a href="#">
											<img className="h-6 w-auto" src={Facebook} alt="Facebook" />
										</a>
										<a href="#">
											<img className="h-6 w-auto" src={Instagram} alt="Instagram" />
										</a>
										<a href="#">
											<img className="h-6 w-auto" src={Telegram} alt="Telegram" />
										</a>
										<a href="#">
											<img className="h-6 w-auto" src={Youtube} alt="Youtube" />
										</a>
									</div>
								</div>
							</li>
							<li>
								<div className="space-y-2">
									<p className="text-white">Copyright © 2022 Biolab</p>
									<p className="text-white">All rights reserved.</p>
								</div>
							</li>
						</nav>
					</div>
					<div className="">
						<h2 className="title-font font-bold text-white tracking-widest text-xl mb-3">Sections</h2>
						<nav className="list-none space-y-3 text-lg">
							<li>
								<a className="text-white" href="#">
									About Us
								</a>
							</li>
							<li>
								<a className="text-white" href="#">
									Catalog
								</a>
							</li>
							<li>
								<a className="text-white" href="#">
									Partners
								</a>
							</li>
							<li>
								<a className="text-white" href="#">
									Blog
								</a>
							</li>
						</nav>
					</div>
				</div>
				<div className="md:flex justify-around gap-5 col-span-3">
					<div className="col-span-2">
						<h2 className="title-font font-bold text-white tracking-widest text-xl mb-3">Addresses</h2>
						<nav className="list-none space-y-2">
							<li>
								<a className="text-white" href="#">
									<div className="flex space-x-3 items-start">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
										</svg>
										<div className="">
											<p className="text-lg font-medium">Our headquarter:</p>
											<p className="text-lg"> Suite AM 160, 298 Romford road, Forest Gate, E7 9HD</p>
										</div>
									</div>
								</a>
							</li>
							<li>
								<a className="text-white" href="#">
									<div className="flex space-x-3 items-start">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
										</svg>
										<div className="">
											<p className="text-lg font-medium">Representative offices:</p>
											<p className="text-lg">Kazakhstan: 21A Rsykulov, Sanjar Jandosov street, Shymkent, Kazakhstan</p>
										</div>
									</div>
								</a>
							</li>
							<li>
								<a className="text-white" href="#">
									<div className="flex space-x-3 items-start">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
										</svg>
										<div className="">
											<p className="text-lg font-medium">Representative offices:</p>
											<p className="text-lg">Uzbekistan: 9 Bunyodkor Main Street, Chilonzor district, Tashkent, Uzbekistan</p>
										</div>
									</div>
								</a>
							</li>
						</nav>
					</div>
					<div className="col-span-1">
						<h2 className="title-font font-bold text-white tracking-widest text-xl mb-3">Contacts</h2>
						<nav className="list-none space-y-3">
							<li>
								<a className="text-white" href="#">
									<div className="flex space-x-3 items-center">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
											/>
										</svg>
										<span className="text-lg font-normal">+442080898343 London</span>
									</div>
								</a>
							</li>
							<li>
								<a className="text-white" href="#">
									<div className="flex space-x-3 items-center">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
											/>
										</svg>
										<span className="text-lg font-normal">+998 95 195 91 95 Tashkent</span>
									</div>
								</a>
							</li>
							<li>
								<a className="text-white" href="#">
									<div className="flex space-x-3 items-center">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
										</svg>
										<span className="text-lg font-normal">info@biolabgroups.com</span>
									</div>
								</a>
							</li>
						</nav>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
