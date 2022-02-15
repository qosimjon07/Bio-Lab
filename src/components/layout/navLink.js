import { Link } from "react-router-dom";
import ArrowIcon from "../../images/arrow.png";

function HeaderNavLink() {
	return (
		<nav className="navLink">
			<Link to={"/about"}>
				<span>About us</span>
			</Link>
			<Link to={"/catalog"} className="navLink__nav">
				<span>Catalog</span>
				<img src={ArrowIcon} alt="" />
			</Link>
			<Link to={"/blog"}>
				<span>Blog</span>
			</Link>
			<Link to={"/contact"}>
				<span>Contacts</span>
			</Link>
			<div className="navLink__nav">
				<span>Eng</span>
				<img src={ArrowIcon} alt="" />
			</div>
		</nav>
	);
}

export default HeaderNavLink;
