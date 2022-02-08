function TeamCard({question}) {
	return (
		<div className="w-full rounded-xl border border-gray-200 p-3 space-y-3 text-center">
			<div className="w-full h-72 md:h-56 rounded-xl overflow-hidden border">
                <img className="w-full h-full object-cover" src={question.imgURL} alt="user img" />
            </div>
            <p className="text-xl">{question.name}</p>
            <p className="text-gray-700 leading-5">{question.title}</p>
		</div>
	);
} 

export default TeamCard;
