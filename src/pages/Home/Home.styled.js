import styled from 'styled-components';

export const SplitPane = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  text-align: center;
  position: fixed;
  animation: fadeIn 5s;

  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
`;
