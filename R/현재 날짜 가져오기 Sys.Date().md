## 현재 날짜 가져오기 Sys.Date()



현재 날짜를 불러오는 함수는 Sys.Date()

대소문자에 주의한다.

![img](https://t1.daumcdn.net/cfile/tistory/277E8C4757F3327C0E)



참고로 현재 시각을 불러오는 함수는 Sys.time()

역시 대소문자에 주의한다.

![img](https://t1.daumcdn.net/cfile/tistory/2241AB4A5812D20018)



원하는 포맷대로 표시하고 싶을 때는 format()을 이용한다.

옵션은 다음과 같다.

%Y - 4자리 년도

%y - 2자리 년도

%m - 2자리 월

%d - 2자리 일

예를 들어, 만일 년도를 맨 오른쪽으로 보내고 싶다면

format(Sys.Date(), "%m-%d-%Y") 와 같이 표기한다.

![img](https://t1.daumcdn.net/cfile/tistory/2618D34E5812D22503)



요일을 표시하는 옵션은 다음과 같다.

%a - 한 글자 요일

%A - 세 글자 요일

![img](https://t1.daumcdn.net/cfile/tistory/234A81495812D28E15)



시간 역시 다음 옵션을 이용해 출력할 수 있다.

%H - 시

%M - 분

%S - 초

![img](https://t1.daumcdn.net/cfile/tistory/25592E505812D30F01)