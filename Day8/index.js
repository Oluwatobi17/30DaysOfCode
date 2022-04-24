const isPalindrome =  value =>{
	let reversevalue = '';
	value = value.toString();
	for(let i=value.length-1; i>=0; i--){
		reversevalue += value[i];
	}
	if(reversevalue==value){
		return true;
	}

	return false;
};

const arrayOfPalindrome = arr =>{
	let result = arr.map(item => isPalindrome(item));
	return result;
};

console.log(arrayOfPalindrome(['bad', 'good', 'evil']));