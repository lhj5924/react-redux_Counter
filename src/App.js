import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "./actions/index"
import styled from "styled-components"

function App() {
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()

  return (
    <AppContainer>
      <Container>
        <Counter>
          Counter: <Count>{count}</Count>
        </Counter>
        <Button onClick={() => dispatch(increment())}>Increment</Button>{" "}
        <Button onClick={() => dispatch(decrement())}>Decrement</Button>{" "}
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
