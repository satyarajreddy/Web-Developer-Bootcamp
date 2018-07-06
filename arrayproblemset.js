console.log("CONNECTED");

function printReverse(arr){
	for(var i = arr.length - 1; i>=0; i--){
		console.log(arr[i]);

	}
}

printReverse([1,5,3,4,1])

function isUniform(arr) {
	var first = arr[0];
	for(var i = 1; i < arr.length; i++)
	{
		if(arr[i] !== first)
		{
			return false;
		}
	}
	return true;
}

isUniform([1,1,1,1]);

function sumArray(arr) {
	var total = 0;
	arr.forEach(function(element)
	{
		total += element;
	})
	return total;
}

sumArray([1,5,2,4,5,6])

function maxArray(arr) {
	var max = arr[0];
	for(var i=1;i<arr.length;i++)
	{
		if(arr[i] > max)
		{
			max = arr[i];
		}
	}
	return max;
}

maxArray([2,5,35,7,8])