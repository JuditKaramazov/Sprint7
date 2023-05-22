import React from 'react';
import deleteButton from '../../assets/deleteButton.png';
import styled from 'styled-components';

const StyledTable = styled.table`
  margin: 0 auto;
	min-width: 100%;
	font-size: 13px;
	border-collapse: collapse;
	box-shadow: 0 0 20px rgba(0,0,0,0.1);
`;

export default function UserBudget({
  customBudget,
  user,
  currentDate,
  offeredServices,
  numServices,
  numLanguages,
  totalExpenses,
  onDelete,
}) {
  return (
    <div>
      <StyledTable>
        <thead>
          <tr>
            <th>User name:</th>
            <th>Budget name:</th>
            <th>Date:</th>
            <th>Services:</th>
            <th>Quantity:</th>
            <th>Languages:</th>
            <th>Total price:</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user}</td>
            <td>{customBudget}</td>
            <td>{currentDate}</td>
            <td>{offeredServices}</td>
            <td>{numServices}</td>
            <td>{numLanguages}</td>
            <td>{totalExpenses} €</td>
            <td>
              <button onClick={onDelete} style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
                <img src={deleteButton} alt="Pixel save button" />
              </button>
            </td>
          </tr>
        </tbody>
      </ StyledTable>
    </div>
  );
}
