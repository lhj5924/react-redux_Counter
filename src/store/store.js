// store.js
import { createStore } from "redux"
// import rootReducer from "../reducer/rootReducer" // 루트 리듀서 가져오기
import counterReducer from "../reducer/counterReducer" // 카운터 리듀서만 가져오기

const store = createStore(counterReducer)
export default store
