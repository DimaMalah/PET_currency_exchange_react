import "./Layout.css"
import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { usdRate, eurRate, dataJson, error} from "../../store/slices/currencySlice";
import { rounded } from "../../utils/function";




export default function Layout(){

	const dispatch = useDispatch()
	
	useEffect( ()=>{
		 fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
		.then((result)=>result.json())
		.then(result => {
			dispatch(dataJson(result))
					for (let i in result) {
						if (result[i].cc === "USD") dispatch(usdRate(rounded(result[i].rate)))
						if (result[i].cc === "EUR") dispatch(eurRate(rounded(result[i].rate)))					
					}
				})
		.catch((err) => dispatch(error(err)))
	},[])

	return(
		<div className="layout__wrapper">
			<Header/>
			<Outlet/>
			<Footer/>
		</div>
	)
}