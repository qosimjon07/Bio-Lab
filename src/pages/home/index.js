import Layout from "../../components/layout";
import Doctor1 from "../../images/doctor1.png";
import "../../css/main.css";
import ReviewsCard from "./reviewsCard";
import ConnectBox from "../../components/layout/connect";
import MainAbout from "./about";
import MainCatalog from "./catalog";
import MainBlog from "./blog";
import MissionBox from "../../components/layout/missionBox";
import axios from "axios";
import { useEffect, useState } from "react";

function HomePage() {
	return (
		<Layout>
			<MainSection />
			<MainAbout />
			<MissionBox />
			<MainCatalog />
			<MainBlog />
			<ReviewsSection />
			<PartnersSection />
			<ConnectBox />
		</Layout>
	);
}

export default HomePage;

function MainSection() {
	return (
		<div className="mainBg">
			<div className="container lg:grid lg:grid-cols-8">
				<div className="lg:col-span-3 flex flex-col text-white justify-center py-10 lg:py-5">
					<h1 className="text-5xl font-bold">
						Partnership <br /> & Collaboration
					</h1>
					<p className="text-lg my-4">
						BioLab group is open to prospective partnership with companies of different spheres and specialities. Our main goal is being market oriented and provide the best quality possible. Please,
						contact us regarding further enquiries.
					</p>
					<div>
						<button className="text-lg shadow mt-3 px-8 py-1 rounded-full buttonBg">Get Start</button>
					</div>
				</div>
				<div className="lg:col-span-5 flex">
					<div className="md:flex">
						<img className="w-2/3 md:w-3/5 mx-auto md:h-auto" src={Doctor1} alt="doctor" />
						<div className="flex md:flex-col text-white w-full gap-2 md:gap-10 lg:gap-0 lg:justify-between py-2">
							<div className="border border-white rounded-2xl px-1 py-3 md:px-2 md:py-5 lg:px-4 lg:py-6">
								<p className="text-4xl md:mb-1 lg:mb-2">45</p>
								<p className="text-lg">state partners</p>
							</div>
							<div className="border border-white rounded-2xl px-1 py-3 md:px-2 md:py-5 lg:px-4 lg:py-6">
								<p className="text-4xl md:mb-1 lg:mb-2">10000+</p>
								<p className="text-lg">operations to our patients</p>
							</div>
							<div className="border border-white rounded-2xl px-1 py-3 md:px-2 md:py-5 lg:px-4 lg:py-6">
								<p className="text-4xl md:mb-1 lg:mb-2">50000+</p>
								<p className="text-lg">lenses were delivered to partner clinics</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function ReviewsSection() {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:3000/homeReviews")
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
				<p className="text-4xl font-medium mb-5">Reviews</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
					{data.length > 0 &&
						data.map((question, index) => {
							return <ReviewsCard key={index} question={question} />;
						})}
				</div>
			</div>
		</div>
	);
}

function PartnersSection() {
	return (
		<div className="py-10">
			<div className="container">
				<div className="w-16 border-b-2 border-orange-500"></div>
				<p className="text-4xl font-medium mb-5">Our partners</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

				</div>
			</div>
		</div>
	);
}
