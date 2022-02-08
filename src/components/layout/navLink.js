import { Link } from "react-router-dom";
import { HeaderMail, SignButtons } from "./header";

function HeaderNavLink() {
	const userMail = localStorage.getItem("mail");

    return(
        <div className="hidden md:flex md:space-x-8 items-center">
						<nav className="space-x-10">
							<Link to={"/about"}>
								<button type="button" className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none" aria-expanded="false">
									<span>About us</span>
								</button>
							</Link>
							<Link to={"/catalog"}>
								<button
									type="button"
									className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-6 focus:ring-indigo-500"
									aria-expanded="false">
									<span>Catalog</span>

									<svg className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
										<path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
									</svg>
								</button>
							</Link>
							<Link to={"/blog"}>
								<button type="button" className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none" aria-expanded="false">
									<span>Blog</span>
								</button>
							</Link>
							<Link to={"/contact"}>
								<button type="button" className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none" aria-expanded="false">
									<span>Contacts</span>
								</button>
							</Link>
							<button
								type="button"
								className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-6 focus:ring-indigo-500"
								aria-expanded="false">
								<span>Eng</span>

								<svg className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
									<path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
								</svg>
							</button>
						</nav>
						{userMail ? <HeaderMail /> : <SignButtons />}
						{/* <SignButtons /> */}
					</div>
    )
}

export default HeaderNavLink;