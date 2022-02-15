import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/layout";
import ConnectBox from "../../components/layout/connect";
import BlogImg from "../../images/blogImg.png";

function BlogDetailPage() {
	const { id } = useParams();
	console.log(id);
	const [data, setData] = useState(null);

	useEffect(() => {
		axios
			.get(`http://localhost:3000/blogCard/${id}`)
			.then(function (response) {
				setData(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);

	return (
		<Layout>
			<div className="">{data && <IdCard data={data} />}</div>
		</Layout>
	);
}

export default BlogDetailPage;

function IdCard({ data }) {
	return (
		<div>
			<div className="container mb-120">
				<div className="titleTop"></div>
				<p className="Title">{data.name}</p>
				<div className="blog-detail-box">
					<p className="blog-detail-name">{data.name}</p>
					<img className="blog-Img" src={BlogImg} alt="" />
					<div className="icons-div">
						<div className="flex space-x-1 items-center">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
							</svg>
							<p>{data.date}</p>
						</div>
						<div className="flex space-x-1 items-center">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
								/>
							</svg>
							<p>{data.views}</p>
						</div>
					</div>
                    <p className="blog-detail-text">{data.title}</p>
				</div>
			</div>
			<ConnectBox />
		</div>
	);
}
