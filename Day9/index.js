const factorial =  n =>{		// n!
	if(n===1 || n===0) return 1;

	return n * factorial(n-1);
};

const combination = (n, r) =>{		//nCr
	let result = factorial(n) / (factorial(n-r) * factorial(r));
	return result
};


const pascal = val => {
	let result = [];
	for(let i=0; i<val; i++){
		let row = [];
		for(let j=i; j>=0; j--){
			row.push( combination(i, j) );
		}
		result.push(row);
	}
	return result;
};
//console.log(pascal(4));