import styled from 'styled-components';

export const AboutSplit = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  position: fixed;
  text-align: center;
  animation: fadeIn 3s;

  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
`;

export const AboutLeft = styled.div`
  width: 50%;
  color: white;
  background: black;
  border: 4px solid black;
  &:hover {
    background: rgb(255, 218, 225);
    color: black;
    transition: 0.9s;
  }
`;

export const AboutRight = styled.div`
  width: 50%;
  color: white;
  background: black;
  border: 4px solid black;
  &:hover {
    background: rgb(255, 218, 225);
    color: black;
    transition: 0.9s;
  }
`;

export const AboutTitle = styled.h1`
  font-size: 70px;
  font-weight: 100;
`;

export const AboutText = styled.p`
  margin: auto;
  margin-bottom: 1rem;
  justify-content: center;
  color: black;
  font-family: Lato, sans-serif;
  font-weight: 400;
  font-size: 13px;
  letter-spacing: 0.02rem;
  line-height: 15px;
  text-align: center;
  padding: 30px;
`;
