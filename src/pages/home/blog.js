/** @format */

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogCard from "../../components/layout/blogCard";

function MainBlog() {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:3000/blogCard")
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
				<p className="Title">Blog</p>
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mainCatalog">
					{data.length > 0 &&
						data.map((question, index) => {
							if (index < 3) {
								return <BlogCard key={question.id} question={question} />;
							}
						})}
				</div>
				<div className="flex w-full justify-center">
					<Link to={"/blog"}>
						<button className="mainCatalogButton buttonBg">All products</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default MainBlog;
