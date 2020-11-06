# R 데이터 읽기



```

read.csv(file, header = TRUE, sep = ",", quote = "\"",
         dec = ".", fill = TRUE, comment.char = "", ...)
```

- file : 읽어올 csv 파일
- header : 기본값은 TRUE로 첫 줄을 변수명으로 읽을 것인지 결정
- sep : 기본값은 콤마(,)로 열을 구분하는 기호를 전달
- quote : 기본값은 큰따옴표(")로 각 열을 감싸는 문자 지정. 감싸는 문자 안에 있는 열 구분기호는 읽어들일 자료로 인식합니다.
- dec : 기본값은 점(.)으로 소수점을 나타내는 기호 (유럽, 특히 독일에서는 소수점 기호로 콤마(,)를 썼었다고 합니다. 아직도 독일산 렌즈들은 조리개 값을 나타낼 때 2.8이 아닌 2,8로 쓰여져 있는 것을 볼 수 있습니다.
- fill : 기본값은 TRUE로 행 별로 열의 길이가 다를 때는 FALSE를 사용합니다.
- comment.char : 기본값은 빈문자열("")로 주석을 나타내는 기호를 지정하며 빈문자열일 경우 주석 읽는 것을 하지 않습니다.
- ... : read.table()과 동일한 정보를 read.csv()에 전달합니다. 종종 사용하는 몇가지를 아래에서 살펴봅니다.



```
read.table(file, header = FALSE, sep = "", quote = "\"'",
           dec = ".", numerals = c("allow.loss", "warn.loss", "no.loss"),
           row.names, col.names, as.is = !stringsAsFactors,
           na.strings = "NA", colClasses = NA, nrows = -1,
           skip = 0, check.names = TRUE, fill = !blank.lines.skip,
           strip.white = FALSE, blank.lines.skip = TRUE,
           comment.char = "#",
           allowEscapes = FALSE, flush = FALSE,
           stringsAsFactors = default.stringsAsFactors(),
           fileEncoding = "", encoding = "unknown", text, skipNul = FALSE)

read.csv(file, header = TRUE, sep = ",", quote = "\"",
         dec = ".", fill = TRUE, comment.char = "", ...)

read.csv2(file, header = TRUE, sep = ";", quote = "\"",
          dec = ",", fill = TRUE, comment.char = "", ...)

read.delim(file, header = TRUE, sep = "\t", quote = "\"",
           dec = ".", fill = TRUE, comment.char = "", ...)

read.delim2(file, header = TRUE, sep = "\t", quote = "\"",
            dec = ",", fill = TRUE, comment.char = "", ...)
```



