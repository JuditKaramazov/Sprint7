import styled from 'styled-components';

export const RightPane = styled.div`
  width: 50%;
  background: linear-gradient(135deg, #ededed, #f3bdc6);
  border: 4px solid black;
`;

export const SortButton = styled.button`
  margin: 2px;
  color: #fff;
  cursor: pointer;
  background-color: #0a0a23;
  border:none; 
  border-radius: 10px; 
  padding: 9px;
  &:hover {
    color: black;
    border: 1px solid black;
    background-color: #f1a2be;
  }
`;

export const PaginationButton = styled.button`
  margin: 2px;
  color: #fff;
  cursor: pointer;
  background-color: #0a0a23;
  border:none; 
  border-radius: 10px; 
  padding: 9px;
  &:hover {
    color: black;
    border: 1px solid black;
    background-color: #f1a2be;
  }
  &:disabled {
    color: black;
    background-color: transparent;
  }
`;

export const NumericPagination = styled.button`
  margin: 2px;
  color: black;
  cursor: pointer;
  background: transparent;
  border: none; 
  padding: 6px;
`;

export const CurrentPage = styled(NumericPagination)`
  font-weight: bold;
`;
