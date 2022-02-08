import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import BlogCard from "../../components/layout/blogCard";

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
		<div className="py-10">
			<div className="container">
				<div className="w-16 border-b-2 border-orange-500"></div>
				<p className="text-4xl font-medium mb-5">Blog</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
					{data.length > 0 &&
						data.map((question) => {
							return <BlogCard key={question.id} question={question} />;
						})}
				</div>
			</div>
		</div>
	);
}
