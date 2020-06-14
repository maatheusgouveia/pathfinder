import React from "react";
import { Container, Title } from "./styles";
import Map from "./components/Map";

function App() {
	return (
		<Container>
			<Title>Pathfinder</Title>
			<Map size={{ x: 10, y: 10 }} />
		</Container>
	);
}

export default App;
