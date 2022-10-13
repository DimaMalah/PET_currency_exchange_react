import ExchangeField from "../components/ExchangeField";
import { useSelector } from "react-redux";
import Container from "../components/Container";

export default function MainPage(){
	
  const error = useSelector(state=>state.currency.errors)
	setTimeout(()=>console.log(error),1000)

  const renderError = () => 
		<div style={{color:"#cbcad2", display: "flex", flex: "1 1 auto", marginTop: "200px"}}>
			<Container>
				Oops.. Something went wrong!
			</Container>
		</div>


	return(
			(error) 
				? renderError(error) 
				: <ExchangeField/>
	)
}