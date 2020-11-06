# Visual Studio Code로 HTML, JavaScript 사용하기

enai 2019. 8. 18. 02:12

Visual Studio Code(=vscode)는 무료 코드 편집기이다.

Windows, macOS, Linux 모두 지원하며, 거의 모든 주요 프로그래밍 언어를 지원한다.

(하지만 나는 자바스크립트, html 코딩에만 사용 중이므로 JavaScript 카테고리에 넣었다.)

코드 하이라이트, 자동 완성, 디버깅 기능 제공 등 다양한 기능이 있다.

 

 

+)현재 노트북이 Windows 운영체제이므로, 아래 설명들도 Windows 기준의 설명이다.

 

 

 

## 1. Visual Studio Code 설치하기

 

공식 홈페이지([링크](https://code.visualstudio.com/))에서 설치 파일을 다운 받을 수 있다.

구글에 Visual Studio Code를 검색해서 접속할 수도 있다.

 



![img](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fzn9cN%2Fbtqxyhbzxdz%2FHfk2KVQ9fhX9BpXo7LKVi1%2Fimg.jpg)Visual Studio Code 페이지



 

다운받을 컴퓨터의 운영체제가 윈도우라면 바로 Download for Windows 버튼을 클릭하면 된다.

다른 OS는 옆의 화살표를 눌러 다운받을 수 있다.

 

※참고: Insiders 버전은 Stable 버전의 베타 버전이라고 한다. 아직 정식으로 나오지 않은 최신 기능을 사용하려는 게 아니면 Stable을 다운받으면 된다.

 

이제 다운받은 설치 파일을 실행시키면 된다.

 

설치 과정 중 추가 작업 선택 부분만 설명이 필요할 것 같다.

 



![img](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbuzPi3%2FbtqxwES8xml%2FDMTJva2evmV75uRzTbj201%2Fimg.jpg)Visual Studio Code 설치하며 진행할 추가 작업 선택



 

사용권 계약에 동의하고 설치 경로를 지정한 뒤, 추가 작업 선택 화면이 나오는 것으로 기억한다.

 

 

1) "Code(으)로 열기" 작업을 Windows 탐색기 파일의 상황에 맞는 메뉴에 추가



![img](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fcmv4Gq%2FbtqxyMWuJN6%2Fas6aujgnfY0yRwTOqm8Tjk%2Fimg.png)



캡처 속 사진처럼 파일을 Visual Studio Code로 열 수 있는 기능을 제공해준다.

 

2) "Code(으)로 열기" 작업을 Windows 탐색기 디렉터리의 상황에 맞는 메뉴에 추가

위의 기능을 폴더를 선택했을 때도 제공해준다.

 

3) Code을(를) 지원되는 파일 형식에 대한 편집기로 등록합니다.

Visual Studio Code로 열 수 있는 파일을 실행했을 때, 바로 Visual Studio Code 편집기로 열리도록 합니다.

 

4) PATH에 추가 (다시 시작한 후 사용 가능)

Visual Studio Code를 환경 변수 PATH에 추가하여, 콘솔에서 'code'를 입력해 Visual Studio Code를 열 수 있게 합니다.

 

※PATH 설정 확인하는 법 : 제어판 → 시스템 → 고급 시스템 설정 → 환경 변수

 

 

 

 

## 2. Visual Studio Code 실행하기

 



![img](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FQsF0u%2FbtqxvM4XElG%2FdMD3h7H6FzqNB1mVxS12rK%2Fimg.jpg)Visual Studio Code 실행 첫 화면



 

1) 실행 폴더 (파일) 생성하기

 

vscode로 실행할 폴더가 있다면 Open folder로 바로 열 수 있다.

(Welcome 창의 Start 아래에 있으며, 상단의 File 메뉴에도 있다.)

 

새로 만들어야 한다면 상단의 File 메뉴에서 New File을 눌러 파일을 생성한다.



![img](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdP3eM8%2FbtqxxbJYjnU%2FOLtDkvFLRp8HmjY5PJUEF1%2Fimg.jpg)



왼쪽에 있는 이 모양의 Explorer 버튼으로 폴더와 파일들을 볼 수 있다.

여기서 폴더 안에 폴더나 파일을 생성할 수도 있다.



![img](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcYa78n%2Fbtqxyiau8zD%2FBFfSPFdhhzPM5ChlfP3ZnK%2Fimg.jpg)



Explorer의 폴더에 마우스를 가져가면 뜨는 아이콘이다.

차례대로 파일 생성, 폴더 생성, 새로고침, 폴더 접기 기능이다.

 

파일 생성시, 파일이름.파일확장자를 쓰면 해당하는 파일이 생성된다.

ex) js_file.js 라고 쓰면 js_file이라는 이름의 js 파일이 생성된다.

 



![img](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbNANN6%2FbtqxvMDS104%2FWg2ovtmNpDJ4o3n0EdXRV1%2Fimg.jpg)



생성된 파일에 코드를 입력하면 된다.

 

이제 이 자바스크립트 파일을 실행하기 위해 Code Runner라는 확장 프로그램을 설치했다.

 

 

2) Code Runner 설치하기

 



![img](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FeeedNW%2FbtqxxKyzPoW%2F10hvE1SmKdkhSUiHNA7mSK%2Fimg.jpg)



좌측 메뉴 중 가장 아래 있는 Extensions 버튼을 누른다. (단축키: ctrl+shift+x)

 



![img](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fp2eQy%2FbtqxyMPKGNy%2FsggkCj7CfbZ8AErsM7MN90%2Fimg.jpg)



 

Extensions의 검색창에서 code runner를 검색하여, Code Runner를 설치한다. (Install 버튼 클릭)

 

js 파일을 열면



![img](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbFXwiO%2FbtqxvM4Yqb5%2Fg5M1RFfXPWRrrRFjJqavK1%2Fimg.jpg)



이 사진처럼 상단에 재생 버튼이 생겨있다.

단축키 ctrl+alt+n으로, 코드를 실행한다. (입력한 코드는 파일에 저장해야 실행이 된다. ctrl+s로 저장 필수!)

편집창에서 마우스 오른쪽 버튼 클릭하여 나온 메뉴에서 Run Code를 클릭해서 실행할 수도 있다.

코드를 드래그하여 일부 코드만 실행할 수도 있다.

 

 

하지만 Code Runner로는 html 파일을 실행할 수 없다.

 

 

 

HTML 파일을 실행시키기 위해 open in browser 확장 프로그램을 설치했다.

 

3) open in browser 설치하기

 

open in browser 확장 프로그램으로 웹 브라우저에서 파일을 실행시킬 수 있다.

 

Code Runner처럼 Extensions 메뉴에 들어가 open in browser를 검색한다.



![img](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbbHbGH%2FbtqxytQpaV7%2F0cMp0E0UOCjpRthHGKKyc1%2Fimg.jpg)



install 버튼을 눌러 설치한다.

 

편집창에서 마우스 오른쪽을 클릭하여 Open In Default Browser를 클릭한다. (단축키: alt+b)

그럼 해당 html 파일이 기본 웹 브라우저로 실행될 것이다.

 

Open In Other Browser를 클릭하여 다른 브라우저로 실행할 수도 있다. (단축키: shift+alt+b)

 

 

만약 default browser를 크롬으로 바꾸고 싶다면 아래 방법을 따라 하면 된다.

 

1. ctrl+shift+p (모든 명령 표시) 단축키를 누르고, settings를 검색하여 settings.json 파일을 연다.
   1. File -> Preferences -> Settings -> 우측 위의 Open Settings (JSON) 버튼 클릭하여 settings.json 파일을 열 수도 있다. (아래 사진 참고)
2. settings.json 안에 "open-in-browser.default": "chrome"을 추가한다. (JSON 데이터 구분 콤마(,)로 하는 것을 주의해서 추가한다.)

 



![img](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FclZLCP%2Fbtqxx1z32ph%2FhbYXguQyelopClhsWHGSB0%2Fimg.jpg)빨간펜 동그라미 안의 버튼이 Open Settings (JSON)이다.



 



![img](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbwZkfd%2FbtqxxLqG7Ak%2F0HuDKjlN8C2F2CyVyWppwK%2Fimg.jpg)settings.json에 open in default browser 설정 추가



 

 

vscode에서뿐만 아니라 아예 기본 웹 브라우저를 바꾸고 싶다면,

컴퓨터의 시작 버튼(윈도우 아이콘) -> 설정 -> 앱 -> 기본 앱 -> 웹 브라우저에서 크롬으로 바꾸면 된다.

 

 

 

 

## 3. 코딩하기 편리하게 도와주는 기능들

 

html 태그를 입력할 때

ul>li*3 을 쓰고 탭이나 엔터를 치면

```
<ul>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

 이렇게 자동 완성이 된다.

emmet 코드라고 한다.

 

자바스크립트 등의 언어로 코딩을 하면 IntelliSense라는 자동완성 팝업창이 뜬다.

화살표 키보드로 이동하고 탭이나 엔터키로 선택할 수 있다.

 

 

또, vscode에서 지원하지 않는 기능들도 Code Runner와 Open In Browser처럼 확장 프로그램 추가로 사용할 수 있다.

 

단축키 모음 ([링크](https://demun.github.io/vscode-tutorial/shortcuts/))

 

 

 

 

## 4. 디버깅하기

 

vscode에서 디버깅도 할 수 있다.

 



![img](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fc2il5n%2FbtqxxKSTWgP%2FJSI2LlC4kLGJxSGtQko8M1%2Fimg.png)디버깅 예시 화면



 

디버깅할 파일에서 인덱스 숫자 옆을 클릭하면, 위의 사진처럼 빨간 동그라미가 생긴다.

디버깅할 때 멈출 지점을 표시하는 것이다.

 

디버깅은

메뉴의 Debug -> Start Debugging

혹은

좌측 벌레 그림의 디버깅 버튼을 클릭하고 위의 초록색 재생 버튼을 클릭해도 된다.

 



![img](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F7oiyX%2FbtqxxJGs3or%2FHtxEU1MPxY9KO139B9UjR1%2Fimg.jpg)디버깅 중



 

왼쪽에서 멈춘 지점에서의 변수 값들을 확인할 수 있다.



![img](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fn22z0%2Fbtqxyvnb25t%2F21pbjLQcr4A83JFxncdge0%2Fimg.png)디버깅 툴



위 사진의 디버깅 툴로 코드를 한 줄씩 실행하며 값을 확인할 수 있다.

첫번째 버튼은 다시 코드를 실행하는 버튼, 두번째는 다음 행의 코드 실행, 세번째는 해당 코드의 안의 코드 실행, 네번째는 세번째의 반대 버튼, 네번째는 처음부터 다시 실행, 다섯번째는 종료하는 버튼이다.

 

 