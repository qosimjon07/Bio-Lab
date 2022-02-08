import { Link } from "react-router-dom";

function IntraoculargCard({ question }) {
	return (
		<Link to={`/catalog/Intraocular/${question.id}`}>
			<div className="flip-card">
				<div className="flip-card-inner">
					<div className="flip-card-front">
						<div className="w-full rounded-xl border border-gray-200 p-3 space-y-2 text-center">
							<div className="w-full rounded-xl overflow-hidden">
								<img className="w-full object-cover" src={question.imgURL} alt="sertificate" />
							</div>
							<p className="text-gray-700 leading-5">{question.name}</p>
						</div>
					</div>
					<div className="flip-card-back">
						<div className="w-full h-full rounded-xl border border-gray-200 p-3 space-y-2 flex flex-col justify-between">
							<p className="row-height-8 bg-red">{question.title}</p>
							<p className="text-gray-700 leading-5 underline text-white">Read more</p>
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
						<div className="w-full rounded-xl border border-gray-200 p-3 space-y-2 text-center">
							<div className="w-full rounded-xl overflow-hidden">
								<img className="w-full object-cover" src={question.imgURL} alt="sertificate" />
							</div>
							<p className="text-gray-700 leading-5">{question.name}</p>
						</div>
					</div>
					<div className="flip-card-back">
						<div className="w-full h-full rounded-xl border border-gray-200 p-3 space-y-2 flex flex-col justify-between">
							<p className="row-height-8 bg-red">{question.title}</p>
							<p className="text-gray-700 leading-5 underline text-white">Read more</p>
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
						<div className="w-full rounded-xl border border-gray-200 p-3 space-y-2 text-center">
							<div className="w-full rounded-xl overflow-hidden">
								<img className="w-full object-cover" src={question.imgURL} alt="sertificate" />
							</div>
							<p className="text-gray-700 leading-5">{question.name}</p>
						</div>
					</div>
					<div className="flip-card-back">
						<div className="w-full h-full rounded-xl border border-gray-200 p-3 space-y-2 flex flex-col justify-between">
							<p className="row-height-8 bg-red">{question.title}</p>
							<p className="text-gray-700 leading-5 underline text-white">Read more</p>
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
						<div className="w-full rounded-xl border border-gray-200 p-3 space-y-2 text-center">
							<div className="w-full rounded-xl overflow-hidden">
								<img className="w-full object-cover" src={question.imgURL} alt="sertificate" />
							</div>
							<p className="text-gray-700 leading-5">{question.name}</p>
						</div>
					</div>
					<div className="flip-card-back">
						<div className="w-full h-full rounded-xl border border-gray-200 p-3 space-y-2 flex flex-col justify-between">
							<p className="row-height-8 bg-red">{question.title}</p>
							<p className="text-gray-700 leading-5 underline text-white">Read more</p>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
}
