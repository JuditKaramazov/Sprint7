import styled from 'styled-components';

export const InnerForm = styled.div`
  display: grid;
  row-gap: 3px;
  padding: 3px;
  align-items: center;
  justify-self: center;
  background-color: #f4c3ca;
  border: 3px solid black;
  border-radius: 20px;
`;

export const Overlay = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  left: 0;
  top: 0;
  position: fixed;
  animation: smoothStart 0.7s ease-in;
  @keyframes smoothStart {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const ModalMessage = styled.div`
  display: flex;
  height: 100px;
  width: 450px;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 16px;
  font-style: italic;
  text-align: center;
  padding: 10px;
  padding-inline: 1.5rem;
  background-color: rgb(243, 189, 198);
  border: solid 4px black;
  border-radius: 20px;
`;
