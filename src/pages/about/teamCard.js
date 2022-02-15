function TeamCard({question, img}) {
	return (
		<div className="team-card">
			<div className="team-card-img">
                <img className="w-full h-full object-cover" src={img} alt="user img" />
            </div>
            <p className="card-name">{question.name}</p>
            <p className="card-profession">{question.title}</p>
		</div>
	);
} 

export default TeamCard;
