'use strict';

function fizzbuzz(limit) {
  for (var i = 1; i <= limit; i++) {
  	let result = "";
    if(i%3 && i%5)result  = i;
    else{
    	if(i%3==0) result+="fizz";
    	if(i%5==0)result+="buzz";
    }
    console.log(result);
  }
}
