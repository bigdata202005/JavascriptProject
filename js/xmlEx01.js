// npm install xml2js
var xml2js = require('xml2js');
var parser = new xml2js.Parser();
var fs = require('fs');
 
var xml = fs.readFileSync(__dirname + '/CharacterRegion.xml', 'utf-8');
 
parser.parseString(xml, function(err, result) {
  //console.log(result);
  //console.log(JSON.stringify(result));
  let length = result.Characters.CharacterRegion.length
  console.log(length);
  console.log(result.Characters.CharacterRegion[0].Start[0])
  console.log(result.Characters.CharacterRegion[0].Start[0].charCodeAt(0))
  console.log(result.Characters.CharacterRegion[length-1].Start[0])
  console.log(result.Characters.CharacterRegion[length-1].Start[0].charCodeAt(0))
  for(let i=44032;i<=55197;i++){
      console.log(i-44031, " : ", String.fromCharCode(i));
  }
});