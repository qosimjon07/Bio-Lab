import { useState } from "react";

function ConnectBox() {
	const [nameInp, setNameInp] = useState('');
	const [mailInp, setMailInp] = useState('');
	const [massageInp, setMassageInp] = useState('');

	const onInputName = (e) => {
		setNameInp(e.target.value)
	} 

	const onInpMail = (e) => {
		setMailInp(e.target.value)
	}

	const onInpMassage = (e) => {
		setMassageInp(e.target.value)
	}

	const onSubmit = (e) => {
		e.preventDefault();

		// input qiymatlari
		// const nameInpValue = nameInp;
		// const mailInpValue = mailInp;
		// const massageInpValue = massageInp;

		setNameInp('');
		setMailInp('');
		setMassageInp('');
	}

	return (
		<div className="desktop connectBg">
			<div className="container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-5">
				<div className="col-span-2 lg:col-span-1">
					<div className="titleTop"></div>
					<p className="connect-title">Contact with us</p>
					<p className="connect-text">Leave a request and we will contact you shortly</p>
					<form className="grid grid-cols-1 md:grid-cols-2 connect-form">
						<input type="text" value={nameInp} onChange={onInputName} className="connect-input rounded-full outline-none" placeholder="Name" />
						<input type="email" value={mailInp} onChange={onInpMail} className="connect-input rounded-full outline-none" placeholder="Email" />
						<textarea rows="1" type="text" value={massageInp} onChange={onInpMassage} className="connect-input rounded-full outline-none md:col-span-2 resize-none scroll-none" placeholder="Massage" />
						<div>
							<button onClick={onSubmit} className="rounded-full buttonBg connect-button">Send</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default ConnectBox;
