import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import BlogCard from "../../components/layout/blogCard";
import "../../css/main.css"
import "../../css/blog.css"

function BlogPage() {
	return (
		<Layout>
			<MainSection />
		</Layout>
	);
}

export default BlogPage;

function MainSection() {
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
						data.map((question) => {
							return <BlogCard key={question.id} question={question} />;
						})}
				</div>
			</div>
		</div>
	);
}
