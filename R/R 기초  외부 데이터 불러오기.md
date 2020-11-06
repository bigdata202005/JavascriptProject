# R 기초 : 외부 데이터 불러오기

**[ 외부 데이터 유형]**

1. txt
2. csv
3. excel



## 1. txt(메모장)

### 1.1 separator: one blank(띄어쓰기)

data <- read.table(file = “directory/filename.txt”, header = TRUE, sep = " “)

**작업 공간(Working Directory) 설정**
불러오는 파일과 작업 중인 R파일의 폴더(경로)가 같아야 file 경로 설정이 편하다.

[파일 경로 지정 방법 1]
파일 경로 확인하기 : getwd()
파일 경로 지정하기 : setwd(“c:/폴더이름”)

[파일 경로 지정 방법 2]
혹은 상단 바의 ’Session - Set Working Directory - To Source File Location’을 클릭하면 자동으로 R파일이 있는 곳으로 경로가 지정된다.



```
blank <- read.table(file   = "blank.txt",
                    header = TRUE,
                    sep    = " ")
blank
##   id height weight
## 1  1    170     70
## 2  2    179     71
## 3  3    168     50
```

header = TRUE는 txt에 있는 변수명을 R에서 불러올 때 그대로 가져온다는 것을 의미
header가 FALSE면 변수명이v1, v2로 표시



### 1.2 separator: comma(,)

data <- read.table(file = “directory/filename.txt”, header = TRUE, sep = “,”)

```
comma <- read.table(file   = "comma.txt",
                    header = TRUE,
                    sep    = ",")
comma
##   id     food drink
## 1  1 감말랭이  홍차
## 2  2     타코  콜라
## 3  3     스시  맥주
## 4  4   꽃게탕  맥주
```

View(comma) : 다른 스크립트에서 표로 보기



### 1.3 separator: tab

data <- read.table(file = “directory/filename.txt”, header = TRUE, sep = “”)

```
tab <- read.table(file   = "tab.txt",
                    header = TRUE,
                    sep    = "\t")
tab
##   id address ttime
## 1  1    잠실    20
## 2  2  영등포    50
## 3  3  이태원    30
## 4  4    유성   120
View(tab)
```



## 2. csv

- comma separated value의 약자
- 엑셀의 특수한 형태

data <- read.csv(file = “directory/filename.csv”, header = TRUE)

```
hope <- read.csv(file = "hope.csv",
                 header = TRUE)

hope
##   id     idol marry
## 1  1     솔라    38
## 2  2     공유    33
## 3  3 강다니엘    37
```



## 3. excel

- xls : 2003 이하 버전
- xlsx : 2007 이상 버전

하지만, R의 기본 기능에서는 엑셀을 못 읽어온다. 따라서 추가 pcakage의 설치가 필요하다.



**package란?**
쉽게 말해서 R의 추가기능을 사용하기 위해 설치하는 파일이라고 보면 된다.
package를 깔기 위해서는 인터넷 연결이 필요하다.
동일 컴퓨터에서 package 설치는 한번만 하면 된다.



install.packages(“package”)

```
install.packages("readxl") # 설치할 때 패키지명에 쌍따음표가 필요하다
```

package를 설치 하고 나서, R과의 연결을 위해 package의 내용을 RAM(메모리)에 올려야 한다.
이 과정은 R을 재시작 하고, 해당 패키지가 필요할 때마다 수시로 실행해 줘야 한다.



library(package)

```
library(readxl)
```


그 후의 불러오기는 위에서 했던 것과 비슷하다.

data <- readxl::read_excel(path = “directory/filename.xlsx”, sheet = “sheetName” or index, col_names = TRUE)

```
reading <- readxl::read_excel(path      = "reading.xlsx",
                              sheet     = "data", # sheet의 이름
                              col_names = TRUE)
reading
## # A tibble: 6 x 3
##      id books author      
##   <dbl> <dbl> <chr>       
## 1     1     7 김연수      
## 2     2     2 마이클크릭턴
## 3     3    10 이외수      
## 4     4     1 이부일      
## 5     5     5 김경태      
## 6     6     0 신경숙
reading2 <- readxl::read_excel(path      = "reading.xlsx",
                              sheet     = 1, # sheet가 첫번째 있는 경우
                              col_names = TRUE)
reading2
```



