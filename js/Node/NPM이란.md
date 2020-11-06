# NPM이란?

npm은 Node Packaged Manager의 약자입니다.  

무슨 의미인지 한 번 추측을 해볼까요?   먼저 Node는 Node.js를 의미하는 것 같습니다. Packaged라는 것은 package로 만들어진 것들을 의미하는 것 같습니다.  package는 모듈이라고도 불리는데 패키지나 모듈은 프로그램보다는 조금 작은 단위의 기능들을 의미합니다. 그리고 Manager는 잘 아시는 것처럼 관리자를 의미합니다.  이걸 합쳐보면 npm이라는 것은 Node.js로 만들어진 pakage(module)을 관리해주는 툴이라는 것이 됩니다.   

이름처럼 npm은 Node.js로 만들어진 모듈을 웹에서 받아서 설치하고 관리해주는 프로그램입니다. 개발자는 단 몇 줄의 명령어로 기존에 공개된 모듈들을 설치하고 활용할 수 있습니다. 

프로그램보다 조금 작은 단위인 이 모듈들을 필요에 따라서 이런 저런 모양으로 쌓아서 활용을 할 수 있다고 하는데 필요한 기능을 적절하게 활용할 수 있다면 개발자 입장에서는 참 좋은 일이죠

거기서 그치는 것이 아니라 이 모듈들을 활용했다면 이후에 그 모듈을 만든 개발자가 업데이트를 하거나 할 경우 체크를 해서 알려주는 듯합니다. 버전관리도 쉬워진다는 의미이죠. 



버전 확인을 원하시면 npm -v 명령어를 하면 됩니다.  

```
$ npm -v
5.6.0
```

npm 최신 버젼 설치하기

```
$ npm install npm@latest -g
C:\Users\Administrator\AppData\Roaming\npm\npx -> C:\Users\Administrator\AppData\Roaming\npm\node_modules\npm\bin\npx-cli.js
C:\Users\Administrator\AppData\Roaming\npm\npm -> C:\Users\Administrator\AppData\Roaming\npm\node_modules\npm\bin\npm-cli.js
+ npm@6.0.0
added 680 packages in 45.127s

$ npm --v
6.0.0
```

npm -h 명령어를 하시면 npm 에 사용되고 있는 명령어들와 설명을 볼수 있습니다.  

```
$ npm -h

Usage: npm <command>

where <command> is one of:
    access, adduser, bin, bugs, c, cache, completion, config,
    ddp, dedupe, deprecate, dist-tag, docs, doctor, edit,
    explore, get, help, help-search, i, init, install,
    install-test, it, link, list, ln, login, logout, ls,
    outdated, owner, pack, ping, prefix, profile, prune,
    publish, rb, rebuild, repo, restart, root, run, run-script,
    s, se, search, set, shrinkwrap, star, stars, start, stop, t,
    team, test, token, tst, un, uninstall, unpublish, unstar,
    up, update, v, version, view, whoami

npm <command> -h     quick help on <command>
npm -l           display full usage info
npm help <term>  search for help on <term>
npm help npm     involved overview

Specify configs in the ini-formatted file:
    C:\Users\Administrator\.npmrc
or on the command line via: npm <command> --key value
Config info can be viewed via: npm help config

npm@5.6.0 C:\Program Files\nodejs\node_modules\npmnpm -h
```



해당 커맨드의 설명을 보시고 싶으시면 npm 커맨트 -h 를 하시면 됩니다. 

아래는 npm install -h 를 실행하여 install 커맨드의 설명화면을 출력하였습니다. 

```
$ npm install -h

npm install (with no args, in package dir)
npm install [<@scope>/]<pkg>
npm install [<@scope>/]<pkg>@<tag>
npm install [<@scope>/]<pkg>@<version>
npm install [<@scope>/]<pkg>@<version range>
npm install <folder>
npm install <tarball file>
npm install <tarball url>
npm install <git:// url>
npm install <github username>/<github project>

aliases: i, isntall, add
common options: [--save-prod|--save-dev|--save-optional] [--save-exact] [--no-save]npm install -h 
```

가장 많이 쓰이는 커맨드는 install 입니다. npm install <모듈>  을 명령하면 해당 모듈이 설치 됩니다. 아래는 colors 모듈을 설치하는 화면입니다. 

```
$ npm install colors
npm WARN saveError ENOENT: no such file or directory, open 'C:\JS\package.json'
npm WARN enoent ENOENT: no such file or directory, open 'C:\JS\package.json'
npm WARN JS No description
npm WARN JS No repository field.
npm WARN JS No README data
npm WARN JS No license field.

+ colors@1.2.4
updated 1 package in 1.211s
```

설치된 모듈을 삭제하고 싶다면 npm remove <모듈명> 을 하면 됩니다. 아래는 설치된 colors모듈을 삭제하는 화면 입니다. 

```
$ npm remove colors
npm WARN saveError ENOENT: no such file or directory, open 'C:\JS\package.json'
npm WARN enoent ENOENT: no such file or directory, open 'C:\JS\package.json'
npm WARN JS No description
npm WARN JS No repository field.
npm WARN JS No README data
npm WARN JS No license field.

removed 1 package in 0.42s

```

모듈의 원하는 버전이 있다면 npm install <모듈명>@<버전> 을 하면 원하는 버전이 설치 됩니다. 

```
$ npm install colors@0.5.1
npm WARN saveError ENOENT: no such file or directory, open 'C:\JS\package.json'
npm WARN enoent ENOENT: no such file or directory, open 'C:\JS\package.json'
npm WARN JS No description
npm WARN JS No repository field.
npm WARN JS No README data
npm WARN JS No license field.

+ colors@0.5.1
added 1 package in 1.217s
```

 설치된 모듈의 버전이 궁금하다면 npm list <모듈명> 을 하면 됩니다.  

```
n$ npm list colors
C:\JS
`-- colors@0.5.1
pm list colors
```

 모듈의 최신 버전이 궁금하다면 view 를 하시면 됩니다. 

```
$ npm view colors version
1.2.4
```

 현재 설치된 모듈들을 모고 싶다면 npm ls 을 하면 됩니다. 너무 뎁가 깊어서 한화면에 들어오지 않느나면 depth 파라미터로 조절하시면 됩니다. 

```
npm ls --depth=0
```



명령 축약형

```
-v: --version
-h, -?, --help, -H: --usage
-s, --silent: --loglevel silent
-q, --quiet: --loglevel warn
-d: --loglevel info
-dd, --verbose: --loglevel verbose
-ddd: --loglevel silly
-g: --global
-C: --prefix
-l: --long
-m: --message
-p, --porcelain: --parseable
-reg: --registry
-f: --force
-desc: --description
-S: --save
-P: --save-prod
-D: --save-dev
-O: --save-optional
-B: --save-bundle
-E: --save-exact
-y: --yes
-n: --yes false
ll and la commands: ls --long
```

