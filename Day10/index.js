const sort = (arr)=>{ // sorts arrays
	let sorted = [];
	while(arr.length>0){
		let minValue = Math.min(...arr);
		sorted.push( minValue );
		let newarr = arr.filter(element => element != minValue);
		
		arr = [...newarr];
	}
	return sorted;
};


const sortArrays = (arr1, arr2) =>{
	let combine = arr1.concat(arr2);
	return sort(combine);
}

//console.log(sortArrays([1,4,7,8] , [2,3,4]));