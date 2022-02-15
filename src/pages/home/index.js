/** @format */

import Layout from "../../components/layout";
import Doctor1 from "../../images/doctor1.png";
import Partner1 from "../../images/image 10.png";
import Partner2 from "../../images/image 11.png";
import Partner3 from "../../images/image 12.png";
import Partner4 from "../../images/image 13.png";
import Partner5 from "../../images/image 14.png";
import "../../css/main.css";
import "../../css/header.css";
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
		<div className="mainBg desktop mb-120">
			<div className="container mainSection xl:flex">
				<div className="main-title-div py-10 lg:py-0">
					<h1 className="main-title-div__title">Partnership & Collaboration</h1>
					<p className="main-title-div__text">
						BioLab group is open to prospective partnership with companies of different spheres and specialities. Our main goal is being market oriented and provide the best quality possible. Please,
						contact us regarding further enquiries.
					</p>
					<div>
						<button className="main-title-div__button">Get Start</button>
					</div>
				</div>
				<div className="main-img-box 2xl:flex">
					<img className="main-img-box__img w-full mx-auto" src={Doctor1} alt="doctor" />
					<div className="main-img-box__Div flex-col md:flex-row 2xl:flex-col justify-center mx-auto">
						<div className="main-img-box__Div__div mx-auto">
							<p className="main-img-box__Div__div-title">45</p>
							<p className="main-img-box__Div__div-text">state partners</p>
						</div>
						<div className="main-img-box__Div__div mx-auto">
							<p className="main-img-box__Div__div-title">10000+</p>
							<p className="main-img-box__Div__div-text">operations to our patients</p>
						</div>
						<div className="main-img-box__Div__div mx-auto">
							<p className="main-img-box__Div__div-title">50000+</p>
							<p className="main-img-box__Div__div-text">lenses were delivered to partner clinics</p>
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
		<div className="desktop mb-120">
			<div className="container">
				<div className="titleTop"></div>
				<p className="Title">Reviews</p>
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mainCatalog">
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
		<div className="desktop mb-120">
			<div className="container">
				<div className="titleTop"></div>
				<p className="Title">Our partners</p>
				<div className="flex items-center justify-center gap-5 lg:justify-between flex-wrap">
					<img className="border rounded-lg" src={Partner1} alt="hamkor" />
					<img className="border rounded-lg" src={Partner2} alt="hamkor" />
					<img className="border rounded-lg" src={Partner3} alt="hamkor" />
					<img className="border rounded-lg" src={Partner4} alt="hamkor" />
					<img className="border rounded-lg" src={Partner5} alt="hamkor" />
				</div>
			</div>
		</div>
	);
}
