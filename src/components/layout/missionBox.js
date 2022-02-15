function MissionBox() {
	return (
		<div className="missionBg mb-120">
			<div className="container mission-container grid grid-cols-1 lg:grid-cols-2">
				<div className="w-full h-full">
					<div className="titleTopWhite"></div>
					<p className="mission-title">Our Goals</p>
					<div className="mission-Box box1">
						<ul className="box1-ul">
							<li className="box1-text">Supply the best quality in the best price possible.</li>
							<li className="box1-text">Expand the range of products for each type and category of supplies.</li>
							<li className="box1-text">Expand the additional spheres of supplies.</li>
							<li className="box1-text">Introduce the new and reliable brands to the market.</li>
						</ul>
					</div>
				</div>
				<div className="w-full h-full">
					<div className="titleTopWhite"></div>
					<p className="mission-title">Our Mission</p>
					<div className="mission-Box box2">
						<p className="box2-text">
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