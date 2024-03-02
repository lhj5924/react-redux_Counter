# react-redux_Counter

- 프로젝트 설명 : react-redux 연습용 Counter app
- 사용 스택 : JavaScript, React, react-redux, Styled-components
- 앱 화면 :
  
  ![image](https://github.com/lhj5924/react-redux_Counter/assets/76608100/ec8154c6-7ac5-4524-b535-4c8df27d088d)

- 에러 : count 상태의 초기값 설정 문제.
- count 의 초기값이 counterReducer.js 에 정의한 0이 아니라 undefined 로 나옴.
- 예상 원인 : rootReducer 를 통해 연결할 때 초기값이 일괄적으로 undefined 로 적용되거나, count의 초기값을 0으로 정의한 counterReducer 에서 에러가 있을 듯 하다.
