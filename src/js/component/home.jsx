import { React, useState } from "react";

const Home = () => {
	const [selectedColor, setColor] = useState("red");

	const cycleClick = () => {
		const lightOrder = ["red", "yellow", "green"];

		const currentIndex = lightOrder.indexOf(selectedColor);

		const nextIndex = (currentIndex + 1) % lightOrder.length;

		setColor(lightOrder[nextIndex]);
	};


	return (
		<div className="container">
			<div className="traffic-light">
				<div
					onClick={() => setColor("red")}
					className={"light" + (selectedColor === "red") ? "glow" : ""} id="red-light"></div>
				<div
					onClick={() => setColor("red")}
					className={"light" + (selectedColor === "yellow") ? "glow" : ""} id="yellow-light"></div>
				<div
					onClick={() => setColor("red")}
					className={"light" + (selectedColor === "green") ? "glow" : ""} id="green-light"></div>
			</div>
			<button
				onClick={() => cycleClick}
				className="btn">Cycle</button>
			<button
				onClick={() => }
				className="btn">Add purple light</button>
		</div>
	);
};



export default Home;
