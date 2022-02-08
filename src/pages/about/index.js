import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import ConnectBox from "../../components/layout/connect";
import MissionBox from "../../components/layout/missionBox";
import TeamCard from "./teamCard";
import Doctor2 from "../../images/doctor2.png";
import SertificatesCard from "./sertificatesCard";

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

function MainSection() {
	return (
		<div className="">
			<div className="container grid grid-cols-1 lg:grid-cols-2 items-center">
				<div className="pr-8 py-10 flex flex-col justify-center">
					<div className="w-16 border-b-2 border-orange-500"></div>
					<div className="flex flex-col gap-3">
						<p className="text-4xl font-medium">About the center</p>
						<p className="">
							Our company's main goal is supplying the best to our customers. With this goal our company has been established in 2019 by a group of professionals and surgeons. One of worlds economic
							hubs, London has been chosen to be our head office location. In a short time, we have gathered marketing sales teams in Tashkent(Uzbekistan) and Shymkent(Kazakhstan).
						</p>
						<p className="">
							In 2020, we have opened our representative offices. In the same year, U.S.IOL has signed partnership contract, meanwhile, Labtronics has become our partner company. Meanwhile, we have
							signed partnership agreements with a total of 45 public and private clinics, 3 opticians in Uzbekistan and 18 in Kazakhstan. In 2021, a few European and American distributor companies
							has been merged to our country, giving the opportunity to get in touch with our prospective companies directly.
						</p>
						<p className="">
							Since the establishment of our company, we have done more than 1000 surgeries on our patients, more than 5000 lenses have been distributed to our partner clinics several laboratories has
							been equipped exclusively by us and prospective representative offices establishment plans has entered our future plans.
						</p>
					</div>
				</div>
				<div className="mx-auto">
					<img src={Doctor2} alt="" />
				</div>
			</div>
		</div>
	);
}

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
		<div className="py-10">
			<div className="container">
				<div className="w-16 border-b-2 border-orange-500"></div>
				<p className="text-4xl font-medium mb-5">Company Team</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  2xl:grid-cols-6 gap-5">
					{data.length > 0 &&
						data.map((question) => {
							return <TeamCard key={question.id} question={question} />;
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
		<div className="py-10">
			<div className="container">
				<div className="w-16 border-b-2 border-orange-500"></div>
				<p className="text-4xl font-medium mb-5">Medical Personal</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-5">
					{data.length > 0 &&
						data.map((question) => {
							return <TeamCard key={question.id} question={question} />;
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
		<div className="py-10">
			<div className="container">
				<div className="w-16 border-b-2 border-orange-500"></div>
				<p className="text-4xl font-medium mb-5">Certificates</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-5">
					{data.length > 0 &&
						data.map((question, index) => {
							return <SertificatesCard key={index} question={question} />;
						})}
				</div>
			</div>
		</div>
	);
}
