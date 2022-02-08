function ReviewsCard({question}) {
	return (
		<div className="w-full rounded-3xl border border-gray-200 p-5 space-y-3">
			<div className="flex space-x-5 items-center">
				<div className="w-20 h-20 rounded-full overflow-hidden">
					<img
						className="w-full h-full object-cover"
						src={question.imgURL}
						alt="user"
					/>
				</div>
				<div>
					<p className="text-xl">{question.name}</p>
					<p className="text-gray-700">{question.title}</p>
				</div>
			</div>
			<p className="line-clamp-4">{question.reference}</p>
		</div>
	);
}

export default ReviewsCard;
