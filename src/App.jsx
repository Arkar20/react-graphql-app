import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='posts' element={<Home />} />
				<Route path='posts/:postid' element={<Detail />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
