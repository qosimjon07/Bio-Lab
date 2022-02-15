import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import IntraoculargCard, { InjectorsCard, SuturesCard, ViscoelasticCard } from "../../components/layout/catalogCard";
import ConnectBox from "../../components/layout/connect";
import Malumot from "./malumot";
import "../../css/main.css";
import "../../css/catalog.css";

function CatalogPage() {
	return (
		<Layout>
			<MainSection />
			<InjectorsSection />
			<GelsSection />
			<SuturesSection />
			<Malumot />
			<ConnectBox />
		</Layout>
	);
}

export default CatalogPage;

function MainSection() {
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
				<p className="Title">Intraocular Lenses</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 mainCatalog">
					{data.length > 0 &&
						data.map((question) => {
							return <IntraoculargCard key={question.id} question={question} />;
						})}
				</div>
			</div>
		</div>
	);
}

function InjectorsSection() {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:3000/catalogLensInjectors")
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
				<p className="Title">Lens Injectors</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 mainCatalog">
					{data.length > 0 &&
						data.map((question) => {
							return <InjectorsCard key={question.id} question={question} />;
						})}
				</div>
			</div>
		</div>
	);
}

function GelsSection() {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:3000/catalogViscoelasticGels")
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
				<p className="Title">Viscoelastic Gels</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 mainCatalog">
					{data.length > 0 &&
						data.map((question) => {
							return <ViscoelasticCard key={question.id} question={question} />;
						})}
				</div>
			</div>
		</div>
	);
}

function SuturesSection() {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:3000/catalogSutures")
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
				<p className="Title">Sutures</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 mainCatalog">
					{data.length > 0 &&
						data.map((question) => {
							return <SuturesCard key={question.id} question={question} />;
						})}
				</div>
			</div>
		</div>
	);
}
