const ObjectTransformer = (obj)=>{
	if(Array.isArray(obj)==false || obj.length==0 ){
		console.log(obj, 'must be an array and must not be empty');
		return;
	}

	//const result = obj.map(item => item.name + '/' + item.age + '/' + item.level );
	const result = obj.map(item => `${item.name}/${item.age}/${item.level}` );
	return result;
};

console.log(ObjectTransformer([{name: 'Seun', age: 23, level: '100 level'}]));