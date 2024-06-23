// import styled from 'styled-components'

// export const Wrapper = styled.section`
//     padding: 5rem 0 5rem 0;
//     text-align: center;
//     .common-heading{
//         font-size: 4rem;
//         font-weight: 800;
//         font-family: 'Kanit', sans-serif;
//     }

//     .container {
//       margin-top: 6rem;
//         .contact-form {
//             max-width: 50rem;
//             height: 40rem;
//             margin: auto;
//         }
//         form{
//             display: flex;
//             flex-direction: column;
//             gap: 2rem;
//         }
//         input {
//             height: 5rem;
//             border-radius: 12px;
//             padding: 2rem;
//             font-family: 'Caveat', cursive;
//             font-size: 2.3rem;
//             font-weight: 500;
//             border: 1px solid gray;
//             outline: none;
//             &:hover{
//                 box-shadow: 0 2px 8px rgba(0, 0, 0, 0.7);
//                 border: none;
//                 outline: none;
//             }
//         }
//         textarea{
//             border-radius: 12px;
//             padding: 2rem;
//             font-family: 'Caveat', cursive;
//             font-size: 2.3rem;
//             font-weight: 500;
//             margin-bottom: 2rem;
//             &:hover{
//                 box-shadow: 0 2px 8px rgba(0, 0, 0, 0.7);
//                 border: none;
//                 outline: none;
//             }
//         }
//     }

//     @media only screen and (max-width: 480px) {
//         .common-heading{
//             font-size: 2.5rem;
//         }
//         .container {
//             margin-top: 2rem;
//             .contact-form {
//                 max-width: 20rem;
//                 height: auto;
//                 padding: 2rem;
//             }
//             input{
//                 font-size: 1.6rem;
//                 height: 3.5rem;
//             }
//             textarea{
//                 height: 6rem;
//             }
//         }
//     }
// `;
import styled from "styled-components";

export const ContactBody = styled.div`
  min-height: 160vh;
`;
export const ContactSection = styled.div`
  width: 100%;
  height: 660.75px;
  padding-top: 60px;
  @media (min-width: 270px) and (max-width: 355px) {
    height: 490px;
  }
  @media (min-width: 356px) and (max-width: 440px) {
    height: 530px;
  }
  @media (min-width: 441px) and (max-width: 600px) {
    height: 570px;
  }
  @media (min-width: 601px) and (max-width: 800px) {
    height: 620px;
  }
`;
export const ContactContainer = styled.div`
  width: 100%;
  margin-left: 4rem;
  @media (max-width: 600px) {
    margin-left: 1rem;
  }
`;
export const ContactLeft = styled.div`
  position: relative;
  z-index: 9;
  height: 30rem;
  @media (max-width: 600px) {
    height: 20rem;
  }
  @media (min-width: 600px) and (max-width: 1000px) {
    height: 27rem;
  }
  @media (min-width: 260px) and (max-width: 350px) {
    height: 16rem;
  }
`;
export const CircleImg = styled.img`
  width: 247px;
  height: 240px;
  -o-object-fit: contain;
  object-fit: cover;
  overflow: hidden;
  position: absolute;
  @media (max-width: 600px) {
    width: 200px;
    height: 190px;
  }
  @media (min-width: 260px) and (max-width: 350px) {
    width: 170px;
    height: 150px;
  }
`;
export const Position = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 0.3fr;
  column-gap: 50rem;
  font-family: "Oswald", sans-serif;
  font-weight: 700;
  font-size: 58px;
  line-height: 1.3;
  position: relative;
  z-index: 99;
  top: 4rem;
  left: 5rem;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    font-size: 20px;
    position: relative;
    z-index: 99;
    top: 7rem;
  }
  @media (min-width: 600px) and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    font-size: 3rem;
    top: 7rem;
  }
  @media (min-width: 260px) and (max-width: 350px) {
    top: 7rem;
    font-size: 1.4rem;
  }
  @media (min-width: 1002px) and (max-width: 1200px) {
    column-gap: 30rem;
  }
`;
export const H2Left = styled.div`
  width: 250px;
  height: 22rem;
  z-index: 99;
  @media (max-width: 1000px) {
    height: auto;
    width: 100%;
  }
`;
export const H2Right = styled.div`
  width: 370px;
  height: 22rem;
  margin-top: 0;
  text-align: start;
  @media (max-width: 1000px) {
    height: auto;
    width: 100%;
  }
`;
export const Span = styled.span`
  position: absolute;
  width: 9rem;
  height: 1rem;
  border-radius: 2rem;
  top: 28rem;
  background-color: black;
  left: 5rem;
  animation: active 1s ease-in-out infinite alternate;
  @keyframes active {
    from {
      transform: rotate(-8deg);
    }
    to {
      transform: rotate(9deg);
    }
  }
  @media (max-width: 600px) {
    top: 19rem;
    left: 4.5rem;
  }
  @media (min-width: 600px) and (max-width: 1000px) {
    top: 25rem;
    left: 6rem;
  }
  @media (min-width: 260px) and (max-width: 350px) {
    top: 16rem;
    left: 2.9rem;
  }
`;
export const P = styled.div`
  display: flex;
  margin-bottom: 27px;
  font-family: "Mochiy Pop One", sans-serif;
  font-weight: 100;
  font-size: 1.3rem;
  line-height: 1.7;
  @media (max-width: 600px) {
    margin-top: 2rem;
    font-size: 1.1rem;
    margin-left: 8px;
  }
  @media (min-width: 260px) and (max-width: 330px) {
    font-size: 0.9rem;
  }
`;
export const Details = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  width: 100%;
  height: 56px;
  justify-self: start;
  align-self: start;
  padding-left: 3.8rem;
`;
export const H3Container = styled.div`
  width: 100%;
  height: 28px;
  margin-bottom: 1rem;
`;
export const H3 = styled.span`
  font-family: "Open Sans", sans-serif;
  font-size: 24.63px;
  font-weight: 900;
  line-height: normal;
  @media (min-width: 270px) and (max-width: 440px) {
    font-size: 1.5rem;
    display: flex;
  }
`;
export const Items = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 0;
  padding-bottom: 1rem;
  @media (min-width: 270px) and (max-width: 440px) {
    font-size: 1.3rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;
export const ItemsText = styled.p`
  font-family: "Oswald", sans-serif;
  font-weight: 200;
  font-size: 24px;
  margin-bottom: 0;
  @media (min-width: 301px) and (max-width: 440px) {
    font-size: 1.7rem;
  }
  @media (min-width: 270px) and (max-width: 300px) {
    font-size: 1.6rem;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #d0d0d0;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  padding: 10px;
  filter: drop-shadow(2px 2px #c4c4c4);
`;
export const Msg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  width: 27rem;
  @media (min-width: 260px) and (max-width: 307px) {
    width: 24rem;
  }
`;
export const Label = styled.label`
  font-family: "Mochiy Pop One", sans-serif;
  font-weight: 100;
  font-size: 1.2rem;
  text-align: left;
  margin-bottom: 5px;
  margin-left: 15px;
  color: black;
  margin-top: 1.2rem;
  margin-bottom: 0.7rem;
`;
export const Textarea = styled.textarea`
  height: 15rem;
  padding: 0 20px;
  background: hsl(0, 0%, 96%);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  font-family: "Mochiy Pop One", sans-serif;
  font-weight: 200;
  font-size: 1rem;
  outline: none;
  vertical-align: middle;
  box-sizing: border-box;
`;
