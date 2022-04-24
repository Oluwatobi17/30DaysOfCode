const sort = (arr)=>{
	let sorted = [];
	while(arr.length>0){
		let minValue = Math.min(...arr);
		sorted.push( minValue );
		let newarr = arr.filter(element => element != minValue);
		arr = [...newarr];
	}
	return sorted;
};

//console.log(sort([4,9,-3,5,0,-14,10]));