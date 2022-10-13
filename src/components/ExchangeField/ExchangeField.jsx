import "./ExchangeField.css"
import Container from "../Container"

import { useState } from "react"
import { useSelector } from "react-redux"
import { renderSelect, rounded } from "../../utils/function"


export default function ExchangeField(){

	const data = useSelector(state=>state.currency.data)

	const [isShown, setIsShown] = useState(false)
	const [leftValue, setLeftValue] = useState("")
	const [rightValue, setRightValue] = useState("")
	const [leftCurType, setLeftCurType] = useState("USD")
	const [rightCurType, setRightCurType] = useState("EUR")

	const toggleIsShown = () => {
		return isShown ? setIsShown("") : setIsShown("show")
	}

	const accordionTitle = ()=> {
		return isShown ? "click to hide input fields" : "click if you want to rate the currency"
	}

	const handleChangeLeftValue = (e)=>{
		setLeftValue(e.target.value)
		const value = e.target.value
		if (leftCurType==="UAH") setRightValue(rounded(value / (data.filter(item=>item.cc==rightCurType)[0].rate)))
		setRightValue(rounded(
			e.target.value *
			(data.filter(item=>item.cc==leftCurType)[0].rate / data.filter(item=>item.cc==rightCurType)[0].rate)
		))
	}

	const handleChangeRightValue = (e) =>{
		setRightValue(e.target.value)
		const value = e.target.value
		if (rightCurType==="UAH") setLeftValue(rounded(value / (data.filter(item=>item.cc==leftCurType)[0].rate)))
		setLeftValue(rounded(
			e.target.value *
			rounded(data.filter(item=>item.cc==rightCurType)[0].rate / data.filter(item=>item.cc==leftCurType)[0].rate)
	  ))
	}

	

	return( 
		<div className="exchange-field">
			<Container>
				<div className="accordion" id="accordionPanelsStayOpenExample">
					<div className="accordion-item d-flex flex-column  align-items-center exchange-field__container">
						<h2 className="accordion-header" id="panelsStayOpen-headingOne">
							<button className="btn exchange-field__btn" onClick={()=>toggleIsShown()} type="button"  aria-controls="panelsStayOpen-collapseOne">
								{accordionTitle()}
							</button>
						</h2>
						<div id="panelsStayOpen-collapseOne" className={`accordion-collapse collapse ${isShown}`} aria-labelledby="panelsStayOpen-headingOne">
							<div className="currency-container">

{/* --------------------LEFT INPUT & SELECT---------------------- */}
								<div className="currency-wrapper">
									<select name="select"  
									  value ={leftCurType}
									  className="select"
									  onChange={(e)=>{
											setLeftCurType(e.target.value)
											const value = e.target.value
											setRightValue(rounded(
				 								leftValue * 
												(data.filter(item=>item.cc==value)[0].rate / data.filter(item=>item.cc==rightCurType)[0].rate)

											))	
										}													
									}> 
  									{renderSelect(data)}
									</select>
									<input 
										onChange={handleChangeLeftValue} 
										type="number"  value={leftValue}
										placeholder={0}
										className="input"/>	
								</div>	


								<span className="equality"> = </span>

{/* --------------------RIGHT INPUT & SELECT---------------------- */}
								<div className="currency-wrapper">
									<select name="select" 
										value ={rightCurType} 
										className="select"  
										onChange={(e)=>{
											setRightCurType(e.target.value)
											const value = e.target.value
											setLeftValue(rounded(
												rightValue * 
												(data.filter(item=>item.cc==value)[0].rate / data.filter(item=>item.cc==leftCurType)[0].rate)
												))
											}}>						
  										{renderSelect(data)}
									</select>
									<input onChange={handleChangeRightValue}									
										type="number" 
										value={rightValue} 
										placeholder={0} 
										className="input"/>	
								</div>	


							</div>
						</div>
					</div>
				</div>	
			</Container>		
		</div>
	)
}