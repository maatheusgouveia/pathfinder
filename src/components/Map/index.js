import React, { useState, useEffect } from "react";

import Block from "../Block";

import { Container } from "./styles";

function Map({ size }) {
	const [tracker, setTracker] = useState({ x: 0, y: 0 });
	const [target, setTarget] = useState({ x: 0, y: 0 });
	const [timer, setTimer] = useState(null);

	useEffect(() => {
		setTimer(
			setTimeout(() => {
				if (tracker.x !== target.x || tracker.y !== target.y) {
					if (tracker.x > target.x && tracker.x > 0) {
						setTracker({ ...tracker, x: tracker.x - 1 });
					} else if (tracker.x < target.x && tracker.x < 9) {
						setTracker({ ...tracker, x: tracker.x + 1 });
					} else if (tracker.y > target.y && tracker.y > 0) {
						setTracker({ ...tracker, y: tracker.y - 1 });
					} else if (tracker.y < target.y && tracker.y < 9) {
						setTracker({ ...tracker, y: tracker.y + 1 });
					}
				}
			}, 100)
		);
	}, [target, tracker]);

	function renderBlocks({ x, y }) {
		let blocks = [];

		for (let row = 0; row < x; row++) {
			for (let col = 0; col < x; col++) {
				blocks.push(
					<Block
						x={row}
						y={col}
						key={`${row}${col}`}
						target={target.x === row && target.y === col}
						tracker={tracker.x === row && tracker.y === col}
						onClick={(e) => {
							e.preventDefault();
							setTarget({ x: row, y: col });
							clearTimeout(timer);
						}}
						onContextMenu={(e) => {
							e.preventDefault();
							setTarget({ x: row, y: col });
							clearTimeout(timer);
						}}
					/>
				);
			}
		}

		return blocks;
	}

	return <Container>{renderBlocks(size)}</Container>;
}

export default Map;
