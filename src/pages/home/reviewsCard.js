function ReviewsCard({question}) {
	return (
		<div className="Reviews-card">
			<div className="profile-box">
				<div className="profile-Img">
					<img
						className="w-full h-full object-cover"
						src={question.imgURL}
						alt="user"
					/>
				</div>
				<div>
					<p className="profile-name">{question.name}</p>
					<p className="profile-title">{question.title}</p>
				</div>
			</div>
			<p className="line-clamp-5 Reviews-card-text">{question.reference}</p>
		</div>
	);
}

export default ReviewsCard;
