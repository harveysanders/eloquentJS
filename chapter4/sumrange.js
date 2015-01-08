#!/usr/bin/env node

// Your code here.
var range = function(start, end, step) {
  var numrange = [];
  if (start > end) {
  	if (step == "undefinded") {
  	step = -1;
    }
    for (var i = start; i > end-1; i+=step) {
  		numrange.push(i);
  	}return numrange;	
  } else {
  	if (step == "undefinded") {
      step = 1;
    }
    for (var i = start; i < end+1; i+=step) {
  		numrange.push(i);
  	}return numrange;
  }
}

var sum = function(array) {
  var total = 0;
  for (var b=0; b<array.length; b++) {
    total += array[b];
  }return total;
}

console.log(range(1,10,3));
console.log(sum(range(1, 10, 3)));
// → 55

console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(5,2,-1)));