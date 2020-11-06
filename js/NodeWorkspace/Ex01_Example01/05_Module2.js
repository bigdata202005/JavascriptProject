var _ = require('underscore');
var arr = [1,2,3,4,5];
console.log(arr[0]);
console.log(_.first(arr));
_.each(arr, function(i){
	console.log(i);
});
var arr2 = _.map(arr, function(num){ return num * num; });
_.each(arr2, function(i){
	console.log(i);
});