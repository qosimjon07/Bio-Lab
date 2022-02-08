function ConnectBox() {
	return (
		<div className="connectBg py-10 my-14">
			<div className="container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-5">
				<div className="col-span-2 lg:col-span-1">
					<div className="w-16 border-b-2 border-orange-500"></div>
					<p className="text-4xl font-medium mb-5">Our GoalsContact with us</p>
					<p className="text-xl mb-5">Leave a request and we will contact you shortly</p>
					<form className="grid grid-cols-1 md:grid-cols-2 gap-5">
						<input type="text" className="rounded-full px-4 py-2 border border-teal-300 outline-none" placeholder="Name" />
						<input type="email" className="rounded-full px-4 py-2 border border-teal-300 outline-none" placeholder="Email" />
						<textarea rows="1" type="text" className="rounded-full px-4 py-2 border border-teal-300 outline-none md:col-span-2 resize-none scroll-none" placeholder="Massage" />
						<div>
							<button className="rounded-full px-16 py-2 border buttonBg text-white">Send</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default ConnectBox;
