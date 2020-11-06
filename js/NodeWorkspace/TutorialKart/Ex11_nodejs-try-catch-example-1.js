// example for Node.js Try Catch
var fs = require('fs');

var data = fs.readFileSync('sample.html');
console.log("다른 명령어 실행.....");

/*
결과
----
fs.js:646
  return binding.open(pathModule._makeLong(path), stringToFlags(flags), mode);
                 ^

Error: ENOENT: no such file or directory, open 'C:\JS\NodeWorkspace\TutorialKart\sample.html'
    at Object.fs.openSync (fs.js:646:18)
    at Object.fs.readFileSync (fs.js:551:33)
    at Object.<anonymous> (C:\JS\NodeWorkspace\TutorialKart\Ex11_nodejs-try-catch-example-1.js:4:15)
    at Module._compile (module.js:652:30)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)
    at Function.Module.runMain (module.js:693:10)
    at startup (bootstrap_node.js:188:16)

*/
