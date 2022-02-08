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
		<div className="py-10">
			<div className="container">
				<div className="w-16 border-b-2 border-orange-500"></div>
				<p className="text-4xl font-medium mb-5">New products</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-5">
					{data.length > 0 &&
						data.map((question, index) => {
							if (index < 4) {
								return <CatalogCard key={index} question={question} />;
							}
						})}
				</div>
				<Link to={"/catalog"} className="flex w-full justify-center mt-5">
					<button className="text-lg shadow mt-3 px-8 py-1 rounded-full buttonBg text-white">All products</button>
				</Link>
			</div>
		</div>
	);
}

export default MainCatalog;