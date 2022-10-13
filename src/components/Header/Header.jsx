import "./Header.css"
import Container from "../Container/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faDollarSign, faEuroSign } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


export default function Header (){

	const usd = useSelector(state=>state.currency.usd)
	const eur = useSelector(state=>state.currency.eur)
	const navigate = useNavigate()
	
		return(<div className="header">
		<Container >
			<div className="header__container">
				<ul className="nav justify-content-end">
				<li className="nav-item">
					<a className="nav-link active" onClick={()=>navigate("/PET_Currency_Exchange/Active")} aria-current="page" href="#">Active</a>
				</li>
				<li className="nav-item">
					<a className="nav-link"  onClick={()=>navigate("/PET_Currency_Exchange/Link")} href="#">Link</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" onClick={()=>navigate("/PET_Currency_Exchange/Link_2")} href="#">Link_2</a>
				</li>
				<li className="nav-item">
					<a className="nav-link disabled" onClick={()=>navigate("/PET_Currency_Exchange/Disabled")} href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
				</li>
				</ul>
				<div className="header__icons">
					<div className="header__icon">
						<FontAwesomeIcon icon={faDollarSign } /><span className="header__icon-span">{usd}</span>
					</div>
					<div className="header__icon">
						<FontAwesomeIcon icon={faEuroSign} /><span className="header__icon-span">{eur}</span>
					</div>
				</div>
			</div>		
		</Container>
	</div>
		
	
	)
}