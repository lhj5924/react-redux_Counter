# react-redux_Counter

- 프로젝트 설명 : react-redux 연습용 Counter app
- 사용 스택 : JavaScript, React, react-redux, Styled-components
- 앱 화면 :
  
![image](https://github.com/lhj5924/react-redux_Counter/assets/76608100/56adfdde-ff2b-4977-923b-0954a42a9ff6)


- 에러 : count 상태의 초기값 설정 문제.
 count 의 초기값이 counterReducer.js 에 정의한 0이 아니라 undefined 로 나옴.
- 예상 원인 : rootReducer 를 통해 연결할 때 초기값이 일괄적으로 undefined 로 적용되거나, count의 초기값을 0으로 정의한 counterReducer 에서 에러가 있을 듯 하다.
- 디버깅 : rootReducer 를 통하지 않고 counterReducer 만 적용했을 때 초기값이 0으로 잘 적용된다. 그런데 왜 rootReducer 를 거쳤을 때 하위 reducer 의 초기값이 적용되지 않았을까?
