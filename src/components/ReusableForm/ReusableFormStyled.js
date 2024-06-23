import styled from "styled-components";

export const Wrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0rem 1rem;
  .ContentContainer {
    width: 40vh;
  }
  .Label {
    font-family: "Mochiy Pop One", sans-serif;
    font-weight: 100;
    font-size: 1.2rem;
    text-align: left;
    margin-bottom: 5px;
    margin-left: 15px;
    margin-top: 0rem;
    color: white;
  }
  .input {
    height: 58px;
    padding: 0 20px;
    background: hsl(0, 0%, 96%);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    font-family: "Mochiy Pop One", sans-serif;
    font-weight: 200;
    font-size: 1rem;
    outline: none;
    vertical-align: middle;
    width: 100%;
    min-width: 100px;
    box-sizing: border-box;
  }
`;
export default Wrapper;
