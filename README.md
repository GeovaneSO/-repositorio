Deploy da aplicação:https://repositorio-krhb1ek0e-mengalii.vercel.app/





import styled from "styled-components";

export const Section = styled.section`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.shadow};
  backdrop-filter: blur(2px);
  inset: 0;
  z-index: 1;
`;
export const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 25%;
  animation: bounceIn;
  animation-duration: 1s;
`;
export const DivTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme.white};
  border-radius: 0.3vw 0.3vw 0 0;
  padding: 3.5% 5.9%;
`;
export const Title = styled.h1`
  width: 100%;
  font-weight: 700;
  font-size: 1.1vw;
  color: var(--gray-0);
`;
export const ButtonExit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2vw;
  height: 3vh;
  cursor: pointer;
  color: var(--gray-1);
  background-color: var(--transparent);
  border: none;

  &:hover {
    color: ${(props) => props.theme.red1};
  }
`;
export const Form = styled.form`
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.8vw;
  background: ${(props) => props.theme.white};
  border-radius: 0 0 0.3vw 0.3vw;
  border-top: 0.15vw solid ${(props) => props.theme.black};

  .cursor {
    cursor: pointer;
  }
  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: ${(props) => props.theme.white};
    min-width: 50px;
    box-shadow: 0px 0px 16px 0px ${(props) => props.theme.shadow};
    padding: 1vw;
    font-size: 0.9vw;
    z-index: 1;
    color: ${(props) => props.theme.red2};
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }
  .containerInput {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1.1vw;
  }
  .contentInput {
    display: flex;
    width: 100%;
    background: ${(props) => props.theme.white};
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 0.15vw solid ${(props) => props.theme.black};
  }
  .fixed {
    display: flex;
    align-items: center;
    font-size: 1.3vw;
    margin-right: 0;
    color: ${(props) => props.theme.black};
    background: ${(props) => props.theme.white};
    border: none;
  }
  .fixed-eye {
    display: flex;
    align-items: center;
    font-size: 1.3vw;
    margin-right: 0;
    cursor: pointer;
    color: ${(props) => props.theme.black};
    background: ${(props) => props.theme.white};
    border: none;
  }
  .alert {
    display: flex;
    align-items: center;
    font-size: 1.3vw;
    margin-right: 0;
    color: ${(props) => props.theme.red1};
    background: ${(props) => props.theme.white};
    border: none;
  }
`;
export const Input = styled.input`
  outline: none;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  padding: 0;
  width: 100%;
  height: 5.5vh;
  background: ${(props) => props.theme.white};
  font-weight: 400;
  font-size: 1.05vw;
  color: ${(props) => props.theme.grey2};
  border: none;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 400;
  font-size: 1vw;
  color: ${(props) => props.theme.black};
  font-family: "Jura", sans-serif;
  text-align: start;
`;
export const DivButton = styled.div`
  display: flex;
  width: 100%;
  gap: 6%;
  border-top: 0.15vw solid ${(props) => props.theme.black};
  padding: 1.1vw;
`;
export const ButtonBlue = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 6.6vh;
  background: ${(props) => props.theme.blue1};
  border: 0.1vw solid ${(props) => props.theme.blue1};
  border-radius: 0.2vw;
  font-weight: 500;
  font-size: 1.05vw;
  color: ${(props) => props.theme.white};
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.blue2};
    border: 0.1vw solid ${(props) => props.theme.blue2};
  }
`;
export const ButtonGrey = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 6.6vh;
  background: ${(props) => props.theme.grey4};
  border: 0.1vw solid ${(props) => props.theme.grey4};
  border-radius: 0.2vw;
  font-weight: 500;
  font-size: 1.05vw;
  color: ${(props) => props.theme.black};
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.grey5};
    border: 0.1vw solid ${(props) => props.theme.grey5};
    color: ${(props) => props.theme.white};
  }
`;
export const Select = styled.select`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 4%;
  width: 100%;
  height: 6.5vh;
  background: ${(props) => props.theme.grey2};
  border: none;
  border-radius: 4px;
  font-weight: 400;
  font-size: 1.05vw;
  color: ${(props) => props.theme.grey1};

  &::placeholder {
    color: ${(props) => props.theme.grey1};
  }
`;





delete ----------------

import styled from "styled-components";

export const Section = styled.section`
   position: fixed;
  display: ${props => props.dropdown};
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.shadow};
  backdrop-filter: blur(2px);
  inset: 0;
  z-index: 1;
  @media (min-width: 768px) {
   
  }
  @media (min-width: 1024px) {
  
  }
`;
export const Div = styled.div`
    display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 444px;
  animation: bounceIn;
  animation-duration: 1s;
  @media (min-width: 768px) {
   
  }
  @media (min-width: 1024px) {

  }
`;
export const DivTop = styled.div`

  @media (min-width: 768px) {
   
  }
  @media (min-width: 1024px) {
    display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme.white};
  border-radius: 0.3vw 0.3vw 0 0;
  padding: 3.5% 5.9%;
  }
`;
export const Title = styled.h1`

  @media (min-width: 768px) {
   
  }
  @media (min-width: 1024px) {
    width: 100%;
  font-weight: 700;
  font-size: 1.1vw;
  color: 0.15vw solid ${(props) => props.theme.black};
  }
`;
export const Form = styled.form`
  
  @media (min-width: 768px) {
   
  }
  @media (min-width: 1024px) {
    min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  flex-direction: column;
  background: ${(props) => props.theme.white};
  border-radius: 0 0 0.3vw 0.3vw;
  border-top: 0.15vw solid ${(props) => props.theme.black};

  h1 {
    width: 100%;
  font-weight: 700;
  font-size: 1vw;
  padding: 8% 5.9%;
  color: 0.15vw solid ${(props) => props.theme.black};
  }
  }
`;
export const Input = styled.input`
 
  @media (min-width: 768px) {
   
  }
  @media (min-width: 1024px) {
    outline: none;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  padding: 0;
  width: 100%;
  height: 5.5vh;
  background: ${(props) => props.theme.white};
  font-weight: 400;
  font-size: 1.05vw;
  color: ${(props) => props.theme.grey2};
  border: none;
  }
`;
export const Label = styled.label`
 
  @media (min-width: 768px) {
   
  }
  @media (min-width: 1024px) {
    display: flex;
  flex-direction: column;
  font-weight: 400;
  font-size: 1vw;
  color: ${(props) => props.theme.black};
  font-family: "Jura", sans-serif;
  text-align: start;
  }
`;
export const DivButton = styled.div`

  @media (min-width: 768px) {
   
  }
  @media (min-width: 1024px) {
    display: flex;
  width: 100%;
  gap: 6%;
  border-top: 0.15vw solid ${(props) => props.theme.black};
  padding: 1.1vw;
  }
`;
export const ButtonRed = styled.button`
  
  @media (min-width: 768px) {
   
  }
  @media (min-width: 1024px) {
    box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 6.6vh;
  background: ${(props) => props.theme.red1};
  border: 0.1vw solid ${(props) => props.theme.red1};
  border-radius: 0.2vw;
  font-weight: 500;
  font-size: 1.05vw;
  color: ${(props) => props.theme.white};
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.red2};
    border: 0.1vw solid ${(props) => props.theme.red2};
  }
  }
`;
export const ButtonGrey = styled.button`

  
  @media (min-width: 768px) {
   
  }
  @media (min-width: 1024px) {
    box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 6.6vh;
  background: ${(props) => props.theme.grey4};
  border: 0.1vw solid ${(props) => props.theme.grey4};
  border-radius: 0.2vw;
  font-weight: 500;
  font-size: 1.05vw;
  color: ${(props) => props.theme.black};
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.grey5};
    border: 0.1vw solid ${(props) => props.theme.grey5};
    color: ${(props) => props.theme.white};
  }
}
`;
export const Select = styled.select`

  @media (min-width: 768px) {
   
  }
  @media (min-width: 1024px) {
    box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 4%;
  width: 100%;
  height: 6.5vh;
  background: ${(props) => props.theme.grey2};
  border: none;
  border-radius: 4px;
  font-weight: 400;
  font-size: 1.05vw;
  color: ${(props) => props.theme.grey1};

  &::placeholder {
    color: ${(props) => props.theme.grey1};
  }
  }
`;

