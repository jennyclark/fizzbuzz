function fizzbuzz(start, stop){
	var array = [];
	for(var i = start; i<= stop; i++){
		if(i % 3 == 0 && i % 5 == 0){
			array.push("fizzbuzz");
		}
		else if(i % 3 == 0){
			array.push("fizz");
		}
		else if(i % 5 == 0){
			array.push("buzz");
		}
		else{
			array.push(i);
		}
	}
	console.log(array);
	
}