import styled from "styled-components";

const Card = styled.div`
  background: white;
  color: black;
  box-shadow: 0 1px 1px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 4px;
  padding: 8px;
  margin: 2px 0px;
`

const RedCard = styled(Card)`
  background: rgb(240, 199, 197);
`

export { Card, RedCard };
