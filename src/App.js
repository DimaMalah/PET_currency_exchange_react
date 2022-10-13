import Layout from "./components/Layout";
import NotFoundPage from "./pages/NotFoundPage"
import MainPage from "./pages/MainPage";
import "./App.css"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
		<Routes>
			<Route path="/PET_currency_exchange_react/" element={<Layout/>}>
				<Route index element={<MainPage/>}/>
				<Route path="/PET_currency_exchange_react/*" element={<NotFoundPage />} />
			</Route>
		</Routes>
   
  );
}

export default App;
