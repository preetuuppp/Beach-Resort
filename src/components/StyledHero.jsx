import styled from "styled-components";

import defaultImg from "../assets/images/room-1.jpeg";

// const SimpleButton = styled.button`
//   color: ${orange};
//   background: green;
//   font-size: 3rem;
// `;
// export default SimpleButton;

const StyledHero = styled.header`
  min-height: 60vh;
  background: url(${(props) => (props.img ? props.img : defaultImg)})
    center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default StyledHero;
