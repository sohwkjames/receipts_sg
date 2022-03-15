import styled from "styled-components";

function Card (props) {
  return <Div>{props.children}</Div>
};


// should contain backgroudn colour, shading, padding, margin
const Div = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  padding: 2px 16px;  
  margin: 16px 2px;
`

export default Card;
