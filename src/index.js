// index.js (또는 최상위 컴포넌트)
import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import store from "./store/store" // 위에서 생성한 스토어 가져오기
import App from "./App"

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
