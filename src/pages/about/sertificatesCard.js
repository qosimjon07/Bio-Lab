function SertificatesCard({question}) {
    return(
        <div className="sertificate-card">
			<div className="sertificate-img-box">
                <img className="w-full h-full object-cover" src={question.imgURL} alt="sertificate" />
            </div>
            <p className="sertificate-name">{question.title}</p>
		</div>
    )
}

export default SertificatesCard;