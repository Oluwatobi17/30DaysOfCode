const FizzBuzzProMax = (arr)=>{
	if(Array.isArray(arr)){
		let final = [];
		for(let element=0; element<arr.length; element++){
			let elementFB = [];
			for(let i=1; i<=arr[element]; i++){
				let result;
				if(i%3===0 && i%5===0){
					result = 'FizzBuzz';
				}else if(i%3===0){
					result = 'Fizz';
				}else if(i%5===0){
					result = 'Buzz';
				}else{
					result = i;
				}
				elementFB.push(result);
			}
			final.push(elementFB);
		}

		return final;
	}else{
		console.log(arr, 'is not an array');
	}
};

console.log(FizzBuzzProMax([4, 10, 6]));