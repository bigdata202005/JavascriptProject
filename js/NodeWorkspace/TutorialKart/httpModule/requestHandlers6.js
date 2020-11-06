// request handler가 응답하게 만들기
// Blocking 과 non-blocking

var exec = require("child_process").exec;

function start() {
  console.log("Request handler 'start' was called.");
  var content = "empty";

  exec("dir/s/a", function (error, stdout, stderr) {
    content = stdout;
  });

  return content;
}

function upload() {
  console.log("Request handler 'upload' was called.");
  return "Hello Upload";
}

exports.start = start;
exports.upload = upload;

// 우리가 예상한 대로 /start URL은 로드하는데 10초가 걸립니다. 
// 하지만 /upload 의 request handler에는 sleep()이 없음에도 불구하고 /upload URL 또한 로드하는 데 10초가 걸립니다.
// 왜요? start()가 blocking 동작을 포함하기 때문이죠. 마치 “다른 모든 것을 일하지 못하게 막는 것”과 같죠.

/*
사실 Node.js는 단일 thread입니다. 
대신, Node.js는 동시작업을 event loop을 실행해서 처리하며 개발자들은 이것을 사용할 수 있습니다. 
우리는 blocking 동작을 피하고 non-blocking 동작을 사용해야만 합니다.

그러기 위해서는 callback으로 함수를 다른 함수에게 넘겨야 합니다. 
언젠가 어떤 이벤트가 발생하면 (예를들면 10초 sleep을 한다거나, database에 질의를 하거나, 값비싼 계산을 하거나) 
이 함수를 호출하게 되겠지요.
이런식으로 이야기 하는거죠. 
“헤이, probablyExpensiveFunction(), 니 일을 해줘. 
하지만 나 Single Node.js 쓰레드는 네가 끝낼 때까지 여기서 기다리지 않을거야. 
네 아래에 있는 코드 라인을 계속 실행할거야. 
그러니 여기 이 callbackFunction()을 가져가서 네가 너의 비싼 일을 모두 끝냈을 때 호출해 주겠니? 고마워!”
*/