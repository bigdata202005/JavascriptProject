## ○ IPython이란?

파이썬 공부 또는 코딩을 할 때 간단한 코드 테스트를 하기 위해서 Python Shell을 자주 사용하게 됩니다. Python Shell은 파이썬 인터프레터를 인터액티브 모드로 사용할 수 있도록 해주는 어플리케이션 입니다. 윈도우(Windows)의 커멘드(CMD, 명령프롬프트)나 맥(Mac OS), 리눅스(Rinux)의 터미널(Terminal)을 사용하는 것과 비슷한 개념입니다. 자바스크립트(JavaSrtipt)로 개발을 해 본 분들이라면 자바스크립트의 콘솔(Console)과 같다고 보시면 됩니다. IPython은 기존의 Python Shell이 가진 편리하면서도 아주 강력한 기능들이 추가된 새로운 Shell이며, 또한 파이썬 유저들이 많이 사용하고 있는 쥬피터 노트북(Jupyter Notebook)의 커널로도 사용되고 있습니다.

현재 아나콘다 파이썬을 설치하고 사용중이라면 파이썬 환경에 IPython 패키지가 이미 설치되어 있을 것입니다. 만약, 아나콘다 파이썬이 아닌 일반 파이썬을 설치했을 경우에는 PIP Package Manager를 통해서 간단히 설치를 할 수 있습니다. 

------

## ○ IPython 설치 여부 확인 및 실행 방법

먼저 명령프롬프트를 실행하도록 합니다. IPython의 설치여부를 확인하려면 다음과 같은 명령어를 입력합니다.

```
pip show ipython
```

 명령어를 입력한 후 엔터 버튼을 누르고, 현재 자신의 컴퓨터 또는 노트북에 IPython이 설치되어 있다면 아래와 같이 설치된 버전을 볼 수 있습니다. 



![img](https://blog.kakaocdn.net/dn/qMR43/btqxvnvDhkF/cDMxSqkNkCrxbKmIRnzMS0/img.png)IPython 버전 확인



다음과 같은 명령어를 입력하여 직접 IPython을 실행하고, IPython shell이 실행되는지 확인해도 됩니다.

```
ipython
```



![img](https://blog.kakaocdn.net/dn/bqbJSP/btqxtqAyrSr/r66NNqDZNOrMC1TLdoz8Yk/img.png)IPython 실행 및 종료



IPython을 종료하고자 할때에는 위와 같이 exit()를 입력합니다. 현재 저의 컴퓨터에는 IPython이 설치되어 있으므로, 설치 방법에 대한 자료를 위해 가상 환경을 만들도록 하겠습니다. 가상 환경을 만드는 방법을 알고 싶으신 분은 아래의 글을 펼쳐주세요.

...더보기

------

## ○ IPython 설치 방법

다음과 같은 명령어를 입력하여 IPython 설치를 실행해주도록 합니다.

```
pip install ipython
```

아래와 같이 IPython이 설치된 것을 볼 수 있습니다. 



![img](https://blog.kakaocdn.net/dn/tdnGa/btqxu3YuIN6/rB19MkCazKTzDzVBL2hCzK/img.png)IPython 설치 - 1



이전에 했던 과정과 동일하게 IPython의 설치 여부와 설치 버전을 확인해보니 정상적으로 설치된 것을 알 수 있습니다. 



![img](https://blog.kakaocdn.net/dn/V8W6i/btqxtW0hSzw/yVEA8KNJQVmW5ypi4GA6xK/img.png)IPython 설치 - 2



다음과 같은 명령어를 입력하여 Ipython과 Iypthon 패키지를 사용하기 위해서 필요한 패키지의 설치 여부를 확인해보록 하겠습니다. 

```
pip freeze
```

아래와 같이 정상적으로 설치된 것을 볼 수 있습니다. 



![img](https://blog.kakaocdn.net/dn/xEFeA/btqxtXSvct4/w8988aEhwMynkvSUTcuoK0/img.png)IPython 설치 - 3



개인적으로 패키지 관리가 편리하고 손쉽게 가상환경 관리를 할 수 있는 아나콘다(Anaconda) 파이썬을 설치하는 것을 권장합니다. 아나콘다 파이썬을 설치하는 것을 원하신다면 아래의 링크를 통해 방법을 확인하실 수 있습니다.

[2019/08/11 - Windows10 운영체제에서 파이썬(Python) 설치하기](https://codacoding.tistory.com/19)

------

IPython 설치가 끝났으니, 이번에는 IPython 사용 방법에 대해서 알아보겠습니다. 먼저, 파이썬의 기본으로 설치된 Python Shell을 실행한 후에 IPython Shell을 실행하여 두 가지 Shell의 차이점을 보도록 하겠습니다. 

------

## ○ Python Shell 실행 방법

------

명령프롬프트 창에 다음과 같은 명령어를 입력하면 아래와 같이 본인의 운영체제에 설치된 파이썬의 버전이 출력되며, 동시에 Python Shell이 실행됩니다. 

```
python
```



![img](https://blog.kakaocdn.net/dn/brAFLc/btqxukNenqO/PAtci2KcLgFMhmKuiowiP0/img.png)Python Shell 실행 방법 - 1 



다음과 같이 간단하게 Welcome CODA를 출력해보는 코드를 입력해보니, 정상적으로 출력된 것을 볼 수 있습니다.

```
print("Welcome CODA")
```



![img](https://blog.kakaocdn.net/dn/zLQb8/btqxvpfWru2/7jqUrQyytcZKxmXyaHk7X0/img.png)Python Shell 실행 방법 - 2



이렇게 Python Shell을 사용하여 코드를 작성하면 간단한 코드를 소스파일에 저장하여 실행할 필요 없이 간단하게 바로 실행할 수 있습니다. exit()를 입력하면 파이썬 쉘을 종료할 수 있습니다.

------

## ○ IPython Shell 실행 방법 및 Python Shell과의 차이점

이번에는 IPython Shell을 실행해보도록 하겠습니다. 명령 프롬프트 창에 다음과 같은 명령어를 입력하면 IPython Shell이 실행됩니다. 

```
ipython
```



![img](https://blog.kakaocdn.net/dn/bsceLR/btqxtV8bi1l/tmPlztWy2OuTK6K2MuoyGK/img.png)IPython Shell 실행 방법



이어서 이전해 출력했던 Welcome CODA를 출력해보도록 하겠습니다. 

```
print("Welcome CODA")
```



![img](https://blog.kakaocdn.net/dn/S1Msb/btqxtq8te8g/TF1lCOVMKB7sPNsCEUGuQ1/img.png)IPython Shell 기능 - 1



위와 같이 일반 Python Shell과는 달리 코드의 가독성을 높여주는 코드 하이라이팅(Highlighting) 기능이 탑재된 것을 볼 수 있습니다. 또한 IPython은 일반 Python Shell에서 제공하지 않은 자동 완성(Tap Compelecation) 기능을 제공합니다. 예를 들어, 아래와 같이 모듈을 입력한 후 Tap 키를 누르면 모듈에 포함되어 있는 모든 함수를 보여줍니다.



![img](https://blog.kakaocdn.net/dn/3LY6r/btqxvMhG91S/3PpfvegKlZQBG3pjIWSoQ0/img.png)IPython Shell 기능 - 2



또한 for문을 입력할 때 자동으로 코드 들여넣기를 해주는 기능도 있습니다. 



![img](https://blog.kakaocdn.net/dn/RlKr6/btqxtpIrHWy/Eorn59F07SxLEUp2pqBoh0/img.png)IPython Shell 기능 - 3



물음표를 사용하여 모듈, 함수, 메소드의 설명을 참조할 수 있습니다. 



![img](https://blog.kakaocdn.net/dn/xdz55/btqxu4C7kCF/gAfWLQ0KXS0wUWnVLrEq3K/img.png)IPython Shell 기능 - 4



마지막으로 IPython이 제공하는 매직 함수 중에서 몇 가지를 살펴보도록 하겠습니다. 파이썬 모듈을 import 해야만 사용할 수 있는 것을 매직 함수를 사용하면 간단히 사용할 수 있도록 해줍니다. 먼저 아래와 같은 코드를 입력하여 현재 폴더의 파일의 목록을 불러오도록 하겠습니다. 

```
%ls
```



![img](https://blog.kakaocdn.net/dn/w189H/btqxvoH7DrP/QPAHXuDxvi9GKKpl8X9sbK/img.png)IPython Shell 기능 - 5



이번에는 다음과 같은 코드를 입력하여 test라는 이름의 폴더를 생성한 후, 생성한 폴더로 이동해보겠습니다.

```
%mkdir test
%cd test
```



![img](https://blog.kakaocdn.net/dn/ctJ578/btqxvoVENx4/yunRMw7S4MX43sfckcOoRK/img.png)IPython Shell 기능 - 6



이 외에도 편리한 매직 함수를 많이 제공하고 있는데, 다음과 같은 코드를 입력하여 매직 함수의 목록과 정보를 볼 수 있습니다.

```
%quickref
```



![img](https://blog.kakaocdn.net/dn/bqfUBe/btqxuT9GCVK/HqAHCDaLWf9jNI8nJ5wGz1/img.png)IPython Shell 기능 - 7



앞서 말씀드렸듯이 Python Shell은 개발을 할 때 코드 테스트 또는 모듈 테스트 등에 주로 사용되며, 공부를 하면서도 간단히 코드를 테스트해볼 수 있는 편리한 도구이므로 반드시 익숙해져야 할 과제 중 하나입니다. 