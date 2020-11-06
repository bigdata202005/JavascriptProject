// process.argv로 명령행 인수를 읽을 수 있습니다. 
process.argv.forEach(function(value, index){
  console.log('%d : %s', index , value);
});
console.log('----------------------------------------------');
// 'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6') 
process.argv.forEach((value, index) => {
  // 'template literal syntax' is only available in ES6 (use 'esversion: 6')	
  console.log(`${index} : ${value}`);
});
