const FindAndSum = (arr, target)=>{
	let output = [];
	// let index = arr.indexOf(target);
	// output.push(index);

	for(let i=0; i<arr.length; i++){
		for(let j=0; j<arr.length; j++){
			let sum = arr[i]+arr[j];
			if(i!=j && sum==target){
				output.push(i);
				output.push(j);
				return(output);
			}
		}
	}
	return [-1, -1];
};

console.log(FindAndSum([4,9,3,5,0,14,10], 100));