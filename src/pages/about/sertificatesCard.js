function SertificatesCard({question}) {
    return(
        <div className="w-full rounded-xl border border-gray-200 p-3 space-y-2 text-center">
			<div className="w-full rounded-xl overflow-hidden border">
                <img className="w-full object-cover" src={question.imgURL} alt="sertificate" />
            </div>
            <p className="text-gray-700 leading-5">{question.title}</p>
		</div>
    )
}

export default SertificatesCard;