import { Link } from "react-router-dom";
import LogoImg from "../../images/logo.png";

function MobileMenu({ setIsMobileMenu }) {
	const closeMobileMenu = () => {
		setIsMobileMenu(false);
	};
	return (
		<div className="fixed overflow-auto inset-0 pl-2 z-50  transition transform origin-top-right md:hidden min-h-screen">
			<div className="rounded-l-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50 min-h-screen">
				<div className="py-5 px-5">
					<div className="flex items-center justify-between">
						<div>
							<img className="h-8 w-auto sm:h-10" src={LogoImg} alt="Workflow" />
						</div>
						<div className="-mr-2">
							<button
								onClick={closeMobileMenu}
								type="button"
								className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
								<span className="sr-only">Close menu</span>
								<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
								</svg>
							</button>
						</div>
					</div>
					<div className="mt-6">
						<nav className="grid gap-y-8">
							<Link to={"/"} className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
									/>
								</svg>
								<span className="ml-3 text-base font-medium text-gray-900"> Home </span>
							</Link>

							<Link to={"/about"} className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
								</svg>
								<span className="ml-3 text-base font-medium text-gray-900"> About us </span>
							</Link>

							<Link to={"/catalog"} className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
									<path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
									<path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
								</svg>
								<span className="ml-3 text-base font-medium text-gray-900"> Catalog </span>
							</Link>

							<Link to={"/blog"} className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
									<path d="M13 7H7v6h6V7z" />
									<path
										fillRule="evenodd"
										d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z"
										clipRule="evenodd"
									/>
								</svg>
								<span className="ml-3 text-base font-medium text-gray-900"> Blog </span>
							</Link>

							<Link to={"/contact"} className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
								</svg>
								<span className="ml-3 text-base font-medium text-gray-900"> Contacts </span>
							</Link>
						</nav>
					</div>
				</div>
				<div className="py-6 px-5">
					<div>
						<Link to={"/login"} className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
							Sign up
						</Link>
						<div className="mt-6 text-center flex space-x-1 justify-center text-base font-medium text-gray-500">
							<p>Existing customer?</p>
							<Link to={"/login"} className="text-indigo-600 hover:text-indigo-500">
								Sign in
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MobileMenu;
