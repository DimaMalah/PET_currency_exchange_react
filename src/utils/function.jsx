export function renderSelect(arr){
	return arr.map(
		item=>{
		return <option key={item.cc} value={item.cc}>{`${item.cc}`}</option>
	})
}

export function rounded(number){
    return Math.round(parseFloat(number) * 100) / 100
}