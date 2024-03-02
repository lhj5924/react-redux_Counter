import "./App.css"
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "./actions/index"
import styled from "styled-components"

function App() {
  const count = useSelector((state) => state.count) // useSelector를 사용하여 Redux 스토어의 상태를 선택합니다.
  const dispatch = useDispatch() // useDispatch를 사용하여 액션을 디스패치합니다.
  console.log(count) // 왜 count 의 초기값이 counterReducer.js 에 정의한 0이 아니라 undefined 로 나오는거지?

  return (
    <AppContainer>
      <Container>
        <Counter>
          Counter: <Count>{count}</Count>
        </Counter>
        <Button onClick={() => dispatch(increment())}>Increment</Button>{" "}
        {/* Increment 액션을 디스패치하는 버튼 */}
        <Button onClick={() => dispatch(decrement())}>Decrement</Button>{" "}
        {/* Decrement 액션을 디스패치하는 버튼 */}
        <P>Please check the console</P>
      </Container>
    </AppContainer>
  )
}

export default App

//==================== Styled Components ====================//

const AppContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Container = styled.div`
  width: 560px;
  background-color: wheat;
`
const Counter = styled.h1`
  color: darkcyan;
`
const Count = styled.span`
  color: darkblue;
  font-weight: 600;
`
const Button = styled.button`
  border: none;
  background-color: darkcyan;
  color: white;
  padding: 1rem;
  &:hover {
    cursor: pointer;
    background-color: darkblue;
  }
`
const P = styled.p`
  color: darkcyan;
`
