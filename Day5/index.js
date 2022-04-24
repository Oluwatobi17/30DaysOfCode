const ObjectTransformerReverse = (arr)=>{
	if(Array.isArray(arr)==false){
		console.log(arr, 'must be an array');
		return;
	}

	let result = [];
	for(let index=0; index<arr.length; index++){
		let item = arr[index].split('/');
		result.push({
			name: item[0],
			age: item[1],
			level: item[2]
		});
	}
	return result;
};

console.log(ObjectTransformerReverse(['Seun/23/100 level']));