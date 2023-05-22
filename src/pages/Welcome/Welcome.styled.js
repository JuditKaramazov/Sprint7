import styled from 'styled-components';

export const WelcomeContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: black;
  border: 6px solid black;
  position: fixed;
  transition: 0.9s;
  animation: fadeIn 3s;

  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  
  &:hover {
    background-color: rgb(255, 218, 225);
    transition: 2s;
  }
`;

export const WelcomeTitle = styled.h1`
  align-items: flex-end;
  font-size: 90px;
  font-weight: 100;
`;

export const Introduction = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 50px;
  margin-bottom: 0;
`;

export const StyledText = styled.p`
  font-family: Lato, sans-serif;
  font-size: 15px;
  letter-spacing: 0.02rem;
  text-align: right;
  padding: 20px;
  opacity: 0;
  transition: 0.9s;
  &:hover {
    opacity: 1;
    transition: 0.9s;
  }
`;
