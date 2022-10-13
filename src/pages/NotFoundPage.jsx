import BackBTN from "../components/BackBTN/BackBTN.jsx"


function NotFoundPage() {
	const style = {
		"flex":"1 1 auto",
		"minHeight": "200px",
		"fontWeight": 500,
		"fontFamily": "Montserrat,sans-serif",
		"fontSize": "14px",
		"display": "flex",
		"flexDirection": "column",
		"justifyContent": "space-around",
		"alignItems": "center",
		"color": "#2c7ae7",
		"letterSpacing": "2px",
		"lineHeight": "1.5em"
	}
	return (
		<>
			<BackBTN navigate="../"></BackBTN>
			<div className="not-found__text" style={style}>
				<span>ДАННАЯ СТРАНИЦА НЕ НАЙДЕНА</span>
				<span style={{ "fontWeight": 900, "fontSize": "45px", "color": "rgb(3 49 113)" }}>404</span>
				<span>Выберите другую страницу</span>
			</div>
		</>

	)
}

export default NotFoundPage 