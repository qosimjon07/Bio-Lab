function MissionBox() {
	return (
		<div className="missionBg py-10">
			<div className="container grid grid-cols-1 md:grid-cols-2 text-white gap-5">
				<div className="">
					<div className="w-16 border-b-2"></div>
					<p className="text-4xl font-medium mb-5">Our Goals</p>
					<div className="border rounded-2xl px-10 py-4">
						<ul className="list-disc space-y-4">
							<li className="leading-6">Supply the best quality in the best price possible.</li>
							<li className="leading-6">Expand the range of products for each type and category of supplies.</li>
							<li className="leading-6">Expand the additional spheres of supplies.</li>
							<li className="leading-6">Introduce the new and reliable brands to the market.</li>
						</ul>
					</div>
				</div>
				<div className="">
					<div className="w-16 border-b-2"></div>
					<p className="text-4xl font-medium mb-5">Our Mission</p>
					<div className="border rounded-2xl px-10 py-4">
						<p className="leading-7">
							Our company currently working closely with local and global researchers and professionals to develop new products and introduce them to the market. Make the medical supplies more
							affordable for less developed countries and give access to high quality medical services for the people of these areas. Nobody should be barred from being healthy
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MissionBox;