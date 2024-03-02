// store.js
import { createStore } from "redux"
import rootReducer from "../reducer/rootReducer" // 루트 리듀서 가져오기

const store = createStore(rootReducer)
export default store
