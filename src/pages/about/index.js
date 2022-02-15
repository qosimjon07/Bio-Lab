import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import ConnectBox from "../../components/layout/connect";
import MissionBox from "../../components/layout/missionBox";
import TeamCard from "./teamCard";
import TeamImg from "../../images/teamImg.png";
import TeamImg2 from "../../images/teamImg2.png";
import SertificatesCard from "./sertificatesCard";
import MainSection from "./mainSection";
import "../../css/about.css";

function AboutPage() {
	return (
		<Layout>
			<MainSection />
			<TeamSection />
			<PersonalSection />
			<MissionBox />
			<SertificateSection />
			<ConnectBox />
		</Layout>
	);
}

export default AboutPage;

function TeamSection() {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:3000/aboutCompanyTeam")
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
				<p className="Title">Company Team</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 mainCatalog">
					{data.length > 0 &&
						data.map((question) => {
							return <TeamCard key={question.id} question={question} img={TeamImg} />;
						})}
				</div>
			</div>
		</div>
	);
}

function PersonalSection() {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:3000/aboutMedicalPersonal")
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
				<p className="Title">Medical Personal</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 mainCatalog">
					{data.length > 0 &&
						data.map((question) => {
							return <TeamCard key={question.id} question={question} img={TeamImg2} />;
						})}
				</div>
			</div>
		</div>
	);
}

function SertificateSection() {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:3000/aboutCertificates")
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
				<p className="Title">Certificates</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 mainCatalog">
					{data.length > 0 &&
						data.map((question, index) => {
							return <SertificatesCard key={index} question={question} />;
						})}
				</div>
			</div>
		</div>
	);
}
