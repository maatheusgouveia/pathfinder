import React from "react";
import { FaDog, FaBone } from "react-icons/fa";

import { Container } from "./styles";

function Block({ x, y, onClick, onContextMenu, target, tracker }) {
	return (
		<Container onClick={onClick} onContextMenu={onContextMenu}>
			{tracker && <FaDog />}
			{target && <FaBone />}
		</Container>
	);
}

export default Block;
