#!/usr/bin/env node


// Your code here.
var arrayToList = function(array) {
	var list = null;
	var len = array.length;
	for(var i = len - 1; i >= 0; i--) {	
		list = {value: array[i], rest: list};	
	}return list;
};

var listToArray = function(list) {
	var array = [];
	for (var node = list; node; node = node.rest) { //since node.rest will eventually return null, the for loop will stop.
		array.push(node.value);
	}return array;
};

// creates a new list that adds the element to the front of the input list
var prepend = function(element, list) {
	var newList = {value: element, rest: list};
	return newList;
};

// takes a list and a number and returns the element at the given position 
// in the list, or undefined when there is no such element.
var nth = function(list, number) {
	//return listToArray(list)[number];
	if (!list) 
		return undefined;
	else if(n === 0)
		return list.value;
	else
		return nth(list.rest, n-1);
};

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
