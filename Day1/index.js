const sumOfArray = (arr)=>{
	if(Array.isArray(arr)){
		let sum = 0;
		for(let i=0; i<arr.length; i++){
			sum += arr[i];
		}
		return sum;
	}else{
		console.log(arr, 'is not an array');
		return;
	}
};

console.log(sumOfArray(78));