### week1

https://files.slack.com/files-pri/T037C8TUM47-F03DQHWJYUA/image.png

### week2

fetch를 사용해 Github에서 사용자 정보 가져오기
GitHub 사용자 이름이 담긴 배열을 인자로 받는 비동기 함수 getUsers(names)를 만든 후, GitHub에서 fetch한 사용자 정보들이 담긴 배열을 반환하는 함수를 만들어 보세요.
사용자명에 해당하는 사용자 정보를 가져오려면 GitHub API https://api.github.com/users/사용자명에 요청을 보내면 됩니다.
아래 조건들을 지켜 과제를 완수해 보세요 (필수)
사용자당 fetch 요청은 한 번만 수행해야 합니다.
데이터가 최대한 일찍 도착할 수 있도록 각 요청은 다른 요청의 결과를 기다려서는 안 됩니다.
요청에 실패하거나 존재하지 않는 사용자에 대한 요청을 보냈다면 null을 리턴하고 배열 요소에 담아야 합니다.
추가 구현 사항입니다 (선택)
자신의 이름으로 요청을 보내고 응답 받은 내용을 html에 출력하세요.
Github API 사용법 참고 : https://velog.io/@hyun-jii/Github-API-v3-%EC%82%AC%EC%9A%A9%EB%B0%A9%EB%B2%95-%EA%B9%83%ED%97%88%EB%B8%8C-API-%EC%A0%81%EC%9A%A9

### week3

React로 간단한 화면 구성하기
화면은 Header, Body 컴포넌트로 구성되며
Header는 {username}, 환영합니다 문구를 보여주며
Body는 현재 시각을 yyyy/MM/dd HH:mm:ss 형식으로 보여줍니다.
각 컴포넌트는 각각의 이름을 가진 파일로 생성되고
App.js에서 이를 불러와야 합니다.

### week4

배열 상태를 정의하고 추가, 삭제, 수정하기
스터디에서 보여드렸던 것과 같이 users 배열 상태에 user를 input으로 추가하고
버튼을 눌러 삭제 또는 수정 할 수 있도록 구현해보세요.

### week5

blog 만들기

### week6

https://mashup-todolist.surge.sh

7/6
webpack -> 짐을 싸주는 것이다. 여러개를 따로나눠서 브라우저에서 받으면 리소스가 너무 많으니까 한번에 받으면 적은 비용으로 받을 수 있다. 묶어서 보내는 것.
babel은 transfiler 구형(예전 브라우저)에서는 이해하지 못하기 때문에.
loader는 webpack은 자바 스크립트하고 js, css랑 html도 받아올 수 있도록 하는 것이다.
node 프로젝트를 만들것인데 dependency하고 dev-dependency가 있는데 dependency는 컴파일이후에도 사용될 것. dev-dependency는 개발할 때 사용되는 것. 컴파일과 컴파일 이전에 사용될 것. npm -D
preset은 plugin을 모아놓은 것.
next js는 잘 설정되어있지만

babelrc : babel 경로를 상대경로로 해주는 것.
babel.config.json

###

api 사용해서 User 출력해보기.
