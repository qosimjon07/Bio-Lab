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
		<div className="relative bg-white">
			<div className="max-w-7xl mx-auto container">
				<div className="flex justify-between items-center border-b-2 border-gray-100 py-5 md:space-x-10">
					<Logo />
					<div className="md:hidden">
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

function Logo() {
	return (
		<div className="flex justify-start">
			<Link to={"/"}>
				<span className="sr-only">Workflow</span>
				<img className="h-8 w-auto sm:h-10" src={LogoImg} alt="logo" />
			</Link>
		</div>
	);
}

export function SignButtons() {
	return (
		<div className="hidden lg:flex items-center space-x-3">
			<Link to={"/login"} className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
				Sign in
			</Link>
			<a
				href="#"
				className="whitespace-nowrap inline-flex items-center justify-center px-4 py-1.5 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
				Sign up
			</a>
		</div>
	);
}

export function HeaderMail() {
	return <div className="w-8 h-8 rounded-full bg-gray-400"></div>;
}
