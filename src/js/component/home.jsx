import React, { useState } from "react";

const Home = () => {
	const [selectedColor, setSelectedColor] = useState("red");

	const cycleClick = () => {
		const lightOrder = ["red", "yellow", "green"];

		const currentIndex = lightOrder.indexOf(selectedColor);

		const nextIndex = (currentIndex + 1) % lightOrder.length;

		setSelectedColor(lightOrder[nextIndex]);
	};


	return (
		<div className="container">
			<div className="traffic-light">
				{["red", "yellow", "green"].map((color) => (
					<div
						key={color}
						onClick={() => setSelectedColor(color)}
						className={"light" + (selectedColor === color ? " glow" : "")}
						id={`${color}-light`}
					></div>
				))}
			</div>
			<div className="container">
				<button onClick={cycleClick} className="btn btn-light">
					Cycle
				</button>
			</div>
		</div>
	);
};

export default Home;
