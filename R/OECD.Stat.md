# OECD.Stat

우리가 흔히 언론을 통해 보는 자료 중 OECD 국가들과의 비교가 있습니다.

가끔씩 깜짝깜짝 놀라는 결과들이 많은데 어떻게 이 자료들을 이용했는지 우리도 한번 알아 봅시다.



보통 선진국들의 모임으로 알려져 있으나 2016년 8월 현재 가입된 36개 국가 중 대다수는 선진국들이지만, 몇몇 개발도상국가도 포함되어 있는 국제 협의체인 OECD(Organization for Economic Co-operation and Development, 국제협력개발기구)는 회원국들로부터 정해진 통계를 제출받고 이를 정리한 내용들을 게시하고 있으며 그 내용 또한 사회의 상태를 잘 나타낼 수 있는 다양한 분야의 자료들을 국가별/년도별로 잘 정리하여 주고 있어 유용합니다.



일단 OECD의 데이터를 찾아가보겠습니다.

OECD에서 제공하는 데이터들은 OECD의 통계 웹서비스 플랫폼인 OECD.Stat([http://stats.oecd.org](http://stats.oecd.org/)) 를 통해 제공되고 있습니다. 이 플랫폼에서는 자료를 제공하는 수준을 넘어 바로 그래프를 그려볼 수 있고, 적절한 명령을 통해 여러분들이 원하는 데이터를 볼 수 있도록 하여 높은 수준의 분석을 요하지 않을 경우 웹을 통해 분석 결과를 확인할 수 있는 수준높은 서비스 입니다.



먼저 방문해 봅시다.

좌측에 자료들을 주제(테마)별로 메뉴화하여 원하는 자료항목을 찾을 수 있도록 하였으며, 우측 상단의 "Search"를 통해 자료를 검색할 수 있도록 하였습니다.



![img](https://t1.daumcdn.net/cfile/tistory/275AE95057A6E73722)





오늘은 좌측의 주제별 분류를 통해 자료를 찾아봅시다.

먼저 우리가 오늘 찾고자 하는 것은 이 글을 쓰게된 배경에는 허핑터 포스트의 ["지금 지구가 '가장 뜨거운 한해'를 보내는 이유"](http://www.huffingtonpost.kr/2016/07/25/story_n_11173502.html)라는 기사를 보고 지난 시간 동안 기온에 영향을 미치는 것이 무엇일지 찾아보고자 한 것입니다.



기후에 많은 영향을 끼친다고 알려진 온실가스(영어로 Greenhouse Gas 라고 하더군요)의 배출량을 예전에 OECD 데이터셋에서 찾아본 기억이 나서 오늘도 이를 찾아보겠습니다.



좌측 주제별 분류에서 "Environment" 에 있는 "Air and Climate"의 하위항목인 "Greenhouse gas emissions by source"가 우리가 찾고자 하는 항목입니다.

다음과 같은 내용을 확인하실 수 있습니다.

화면에는 나오지 않지만 먼저 OECD 회원국들 외에 BRICS(브라질, 러시아, 인도, 중국, 남아프리카 공화국) 와 몇몇 국가들의 자료들도 함께 제공하고 있습니다.

또한 총괄 자료로 OECD 전체국가의 합계 자료와 OECD 국가중 유럽국가들의 합계 자료들도 함께 제공하고 있으며, 하단의 표기된 내용을 보시면 전체 OECD 국가 합 자료는 I 혹은 E로 구분되어 있고, 이는 각각 불완전자료, 추정자료임을 나타냅니다. 추후 분석을 하고나서 이런 상황을 밝혀야 할 것 입니다.



![img](https://t1.daumcdn.net/cfile/tistory/247E685057A6E73803)





또한 화면 우측에 있는 파란색 ◀ 버튼을 누르면 자료에 대한 설명과 함께 자료에 있는 ! 의 설명을 볼 수 있는 창이 나타납니다.



![img](https://t1.daumcdn.net/cfile/tistory/243ECA4157A6EC251B)





자 이제 자료를 다운로드 받아봅시다. OECD.Stat 에서는 엑셀, csv 파일, PC-Axis(저는 사용해본 적이 없지만 통계분석에 사용되는 도구입니다.), API, SDMX(xml로 통계 데이터와 메타데이터를 정의하여 데이터를 표현하는 방식으로 통계청의 kosis에서도 제공합니다.)의 다양한 형태를 제공합니다.

우리는 먼저 엑셀로 받아 보겠습니다.

자료 화면 상단의 "Export"를 클릭하면 어떤 유형으로 다운로드 받을 것인지 나타나고 여기서 "Excel"을 클릭해 봅시다.



![img](https://t1.daumcdn.net/cfile/tistory/2653595057A6E73928)





다음과 같은 화면이 나오면 "Expoer to XLS file"을 눌러 파일을 다운로드 받습니다.





![img](https://t1.daumcdn.net/cfile/tistory/267BF94257A6EDDB15)





![img](https://t1.daumcdn.net/cfile/tistory/216D664257A6EDDC22)





엑셀을 통해 이를 열어보면 앞서 웹브라우저를 통해 확인한 내용과 동일한 화면을 볼 수 있습니다.



![img](https://t1.daumcdn.net/cfile/tistory/2276D54257A6EDDD1A)





그런데 이 엑셀 파일이 웹으로 보는 화면을 그대로 가져오다 보니, 자료 분석하기에 불필요한 값이나 빈칸 혹은 (엑셀에서 가장 무서운) 병합된 셀 등 자료를 다듬어야 할 요소들이 많이 있습니다. 물론 자료 관리 자체는 엑셀을 통해서 시각적으로 많은 도움을 받을 수 있지만, 순수 데이터만을 주는 csv 파일로 받아봅시다.



![img](https://t1.daumcdn.net/cfile/tistory/27724D4257A6EDDD1D)







앞서 엑셀 받는 요령과 마찬가지로 "Export"에서 "Text file(CSV)"로 들어오면 다음과 같은 화면이 나타나고, 여기서 열 구분을 CSV의 기본 형식인 콤마(,)를 사용하는 기본값을 확인하고(Defaul format 어쩌구 저쩌꾸 쓰여있습니다~) "Download"를 눌러 파일을 다운로드 받습니다.





![img](https://t1.daumcdn.net/cfile/tistory/2136283857A6E73D14)





![img](https://t1.daumcdn.net/cfile/tistory/2145553857A6E73D05)





엑셀이 설치된 컴퓨터에서 다운로드 받은 파일을 열어보면 엑셀을 통해 해당 내용을 확인할 수 있습니다. 앞서 보였던 엑셀 화면과 꽤 다릅니다. 이 자료의 경우 내부 형식은 엑셀로 보여주지 않았는데 자료의 내부형식을 그대로 CSV로 저장하여 여러 열들과 함께 국가별, 년도별로 구분하여 아주 많은 행의 자료로 제공되고 있습니다. (다양한 R 패키지를 제작하여 많은 사람들에게 R로 자료를 다루는 것을 편안하게 해 준 Hadley-Wickham의 reshape2 패키지를 통해 앞선 엑셀과 같은 형태로 쉽게 변경할 수 있습니다. 여기서 한가지! Hadley-Wickham의 "tidy data"를 웹에서 검색해 보세요....)



![img](https://t1.daumcdn.net/cfile/tistory/2632683857A6E73E18)





그런데... 이를 보니...

우리가 처음에 봤던 Total emissions excluding LULUCF 외에 다른 변수들도 함께 제공되었습니다.....



![img](https://t1.daumcdn.net/cfile/tistory/2328DA3857A6E74023)





OECD.Stat으로 돌아가서 우리가 원하는 변수만 선택해 봅시다.

자료 화면 상단의 "Customise" 위로 마우스를 옮기고 나타나는 하위 메뉴 중 "Selection" 위로 마우스를 옮겨 하위메뉴를 열어봅시다. 국가(Country), 오염원(Pollutant, 오염원으로 해석하는 것이 맞는지 영어능력자님들 도와주세요!), 변수(Variable, 여기서 변수는 화면에 보이는 값들로 수집된 자료로 생각하시면 좋을 것 같습니다.), 년도(Year)가 있습니다.

먼저 "Variable"을 선택합니다.



![img](https://t1.daumcdn.net/cfile/tistory/25337B3857A6E74117)





화면 우측 상단의 "Unselect All"을 클릭하여 선택을 모두 해제하고 "Total emissions excluding LULUCF" 만을 선택한 후 "View Data"를 누릅니다.



![img](https://t1.daumcdn.net/cfile/tistory/222FAE3857A6E74217)





앞선 화면과 미세한 차이가 나타나는 데 화면에 나타난 테이블 상단의 Variable이 ""Total emissions excluding LULUCF"로 고정되어 있습니다.



![img](https://t1.daumcdn.net/cfile/tistory/2236153857A6E74314)





활동

오염원(Pollutant) 변수는 현재 모두 선택되어 있습니다. 여기서 우리가 사용할 것은 모든 오염원들의 합을 사용하고자 합니다. 이를 위해 적당한 오염원 변수를 선택해 주세요.

(은근히 까다로운 부분이 있으니 화면을 잘 확인해 주세요)







자 이제 마지막으로 다시 한번 선택된 변수와 오염원으로 구성된 csv 파일을 다운로드 받습니다.





![img](https://t1.daumcdn.net/cfile/tistory/2139283957A6E7442E)





다운로드된 파일의 이름은 시스템에서 임의로 지어주는 이름으로 우리가 보다 쉽게 사용하기 위해 "oecd_GHG.csv"로 저장해 봅시다.





![img](https://t1.daumcdn.net/cfile/tistory/2262E03657A6E78A19)







마치기 전에!

앞서 말씀드린 바와 같이 OECD.Stat 안에서 각종 그래프를 확인할 수 있습니다.

그래프를 그리기 앞서 "Customise"를 통해 적절한 변수를 선택해 주세요.



![img](https://t1.daumcdn.net/cfile/tistory/2148C23957A6E74621)











OECD의 자료제공 서비스인 OECD.Stat에서 자료를 받는 방법에 대해 간략히 소개하였습니다. 다양한 자료들이 국가별로 년도별로 있으므로 다른 자료들과 함께 비교하는데 좋은 역할을 할 것입니다. 또한 OECD.Stat에서 제공하는 "사용자설명서(Manual)"도 있으므로 참고하시면, 보다 강력한 시스템으로 사용하실 수 있으실 것입니다.



다음에는 여기서 다운로드 받은 자료로 간략히 그래프를 그려보겠습니다.



감사합니다.



PS : CSV가 아니더라도 다양한 포맷이 있으니 여러분들이 원하는 방식으로 하셔도 됩니다. 또한 API를 통해 원격으로 접속할 수 있으므로 능력자님들 API 접속 성고하시고 저에게도 알려주세요!



출처: https://randstat.tistory.com/category/01.제대로알고쓰는 R통계분석 [Data, Statistics & R]