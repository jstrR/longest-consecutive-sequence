module.exports = function longestConsecutiveLength(array) {
  // your solution here
  	if(array.length === 1) return 1;
  	function sorter(a, b){
  		return a - b;
  	}
  	array.sort(sorter);	
	
	let counter = 1;
	let maxLength = 0;  	
  	for(let i = 1; i < array.length; i++){
    	if(array[i] - array[i-1] === 0) continue;
    	if(array[i] - array[i-1] === 1) counter++;
    	if(array[i] - array[i-1] > 1){
      		maxLength = Math.max(counter, maxLength);
      		counter = 1;
    	}
    }
return maxLength;
} 

