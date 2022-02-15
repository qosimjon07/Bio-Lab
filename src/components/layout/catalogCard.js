import { Link } from "react-router-dom";
import CatalogImg from "../../images/catalogImg.png";

function IntraoculargCard({ question }) {
	return (
		<Link to={`/catalog/Intraocular/${question.id}`}>
			<div className="flip-card">
				<div className="flip-card-inner">
					<div className="flip-card-front">
						<div className="">
							<div className="front-card-img">
								<img className="w-full object-cover" src={CatalogImg} alt="sertificate" />
							</div>
							<p className="front-card-text">{question.name}</p>
						</div>
					</div>
					<div className="flip-card-back">
						<div className="w-full h-full flex flex-col justify-between">
							<p className="row-height-8 flip-card-text">{question.title}</p>
							<p className="flip-card-more_text">Read more</p>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
}

export default IntraoculargCard;

export function InjectorsCard({ question }) {
	return (
		<Link to={`/catalog/LensInjectors/${question.id}`}>
			<div className="flip-card">
				<div className="flip-card-inner">
					<div className="flip-card-front">
						<div className="">
							<div className="front-card-img">
								<img className="w-full object-cover" src={question.imgURL} alt="sertificate" />
							</div>
							<p className="front-card-text">{question.name}</p>
						</div>
					</div>
					<div className="flip-card-back">
						<div className="w-full h-full flex flex-col justify-between">
							<p className="row-height-8 flip-card-text">{question.title}</p>
							<p className="flip-card-more_text">Read more</p>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
}

export function ViscoelasticCard({ question }) {
	return (
		<Link to={`/catalog/Viscoelastic/${question.id}`}>
			<div className="flip-card">
				<div className="flip-card-inner">
					<div className="flip-card-front">
						<div className="">
							<div className="front-card-img">
								<img className="w-full object-cover" src={question.imgURL} alt="sertificate" />
							</div>
							<p className="front-card-text">{question.name}</p>
						</div>
					</div>
					<div className="flip-card-back">
						<div className="w-full h-full flex flex-col justify-between">
							<p className="row-height-8 flip-card-text">{question.title}</p>
							<p className="flip-card-more_text">Read more</p>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
}

export function SuturesCard({ question }) {
	return (
		<Link to={`/catalog/Sutures/${question.id}`}>
			<div className="flip-card">
				<div className="flip-card-inner">
					<div className="flip-card-front">
						<div className="">
							<div className="front-card-img">
								<img className="w-full object-cover" src={question.imgURL} alt="sertificate" />
							</div>
							<p className="front-card-text">{question.name}</p>
						</div>
					</div>
					<div className="flip-card-back">
						<div className="w-full h-full flex flex-col justify-between">
							<p className="row-height-8 flip-card-text">{question.title}</p>
							<p className="flip-card-more_text">Read more</p>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
}
