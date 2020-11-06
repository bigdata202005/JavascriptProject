console.log("Hello World!!");
console.log("Hello JavaScript");
console.log("Hello NodeJS");

console.log('console.log');
console.info('console.info');
console.debug('console.debug');
console.warn('console.warn');
console.error('console.error');
console.log();
console.log("한");
console.log("한", "사람", "만세");
/*
%o	Javascript Object HypterLink 
%d	Integer
%i	Integer
%s	String
%f	Floating-point
%j  JSON
 */
console.log("이름 : %s, 나이:%d, 신장 : %f", "한사람", 33, 176.7);
console.log('%cThis text will now be blue and large','color: blue; font-size: x-large');
var car = {
	color : 'red',
	speed : 100,
	go : function() {
		alert('Go');
	},
	stop : function() {
		alert('Stop');
	}
};
