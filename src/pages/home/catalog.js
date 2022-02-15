import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CatalogCard from "../../components/layout/catalogCard";

function MainCatalog() {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:3000/catalogIntraocular")
			.then(function (response) {
				setData(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);

	return (
		<div className="desktop mb-120">
			<div className="container">
				<div className="titleTop"></div>
				<p className="Title">New products</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mainCatalog">
					{data.length > 0 &&
						data.map((question, index) => {
							if (index < 4) {
								return <CatalogCard key={index} question={question} />;
							}
						})}
				</div>
				<div className="flex w-full justify-center">
					<Link to={"/catalog"}>
						<button className="mainCatalogButton buttonBg">All products</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default MainCatalog;
