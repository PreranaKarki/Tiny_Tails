import styled from "styled-components";
// import { Link as LinkS} from 'react-scroll'
// import { Link as LinkR} from 'react-router-dom'

export const MainHeader = styled.header`
  position: fixed; /* Set position to 'sticky' */
  top: 0;
  z-index: 999;
  padding: 0rem 2rem;
  background-color: ${({ theme }) => theme.colors.bg};
  text-align: center;
  width: 100%;
  margin-top: 0rem;
  @media (min-width: 279px) and (max-width: 500px) {
    padding: 0px 8px 12px 8px;
  }
`;
