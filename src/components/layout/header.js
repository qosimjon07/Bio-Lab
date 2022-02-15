import { useState } from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../images/logo.png";
import MobileMenu from "./mobileMenu";
import HeaderNavLink from "./navLink";

function Header() {
	const [isMobileMenu, setIsMobileMenu] = useState(false);
	const openMobileMenu = () => {
		setIsMobileMenu(true);
	};

	return (
		<div className="relative">
			<div className="container">
				<div className="Header">
					<Link to={"/"} className="logo">
						<img className="w-full h-full" src={LogoImg} alt="logo" />
					</Link>
					<div className="menuBtn">
						<button
							onClick={openMobileMenu}
							type="button"
							className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
							aria-expanded="false">
							<span className="sr-only">Open menu</span>
							<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						</button>
					</div>
					<HeaderNavLink />
				</div>
			</div>
			{isMobileMenu && <MobileMenu setIsMobileMenu={setIsMobileMenu} />}
		</div>
	);
}

export default Header;