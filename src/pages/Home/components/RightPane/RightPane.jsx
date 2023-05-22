import React, { useEffect, useState } from 'react';
import UserBudget from '../../../../components/UserBudget/UserBudget';

import filterIcon from '../../../../assets/filterIcon.gif';
import clearButton from '../../../../assets/clearButton.png';
import { RightPane as RightPaneStyled, SortButton, PaginationButton, NumericPagination, CurrentPage } from './RightPane.styled';

const RightPane = ({ budget, setBudget }) => {
  const [filtered, setFiltered] = useState([]);
  const [sortByDateAscending, setSortByDateAscending] = useState(true);
  const [sortByNameAscending, setSortByNameAscending] = useState(true);

  // Triggers the 'useEffect' hook whenever budget, ensuring that the effect is up-to-date.
  useEffect(() => {
    setFiltered(budget);
  }, [budget]);

  // Keeps 'Budget' in the local storage.
  useEffect(() => {
    if (budget.length !== 0) {
      localStorage.setItem('Budget', JSON.stringify(budget));
    }
  }, [budget]);

  // Locates saved budgets according to the user's input.
  const handleFinder = (event) => {
    const searchTerm = event.target.value.trim().toLowerCase();
    const budgetFinder = budget.filter(
      (element) =>
        element.customBudget.toLowerCase().includes(searchTerm) || element.user.toLowerCase().includes(searchTerm)
    );
    setFiltered(budgetFinder);
  };

  // Sorts the budgets by date (ascending and descending).
  const handleSortByDate = () => {
    setBudget((prevBudget) =>
      [...prevBudget].sort(function (a, b) {
        if (sortByDateAscending) {
          return a.currentDate < b.currentDate ? -1 : a.currentDate > b.currentDate ? 1 : 0;
        } else {
          return a.currentDate > b.currentDate ? -1 : a.currentDate < b.currentDate ? 1 : 0;
        }
      })
    );
    setSortByDateAscending((prevValue) => !prevValue);
  };

  // Sorts the budgets by name (ascending and descending).
  const handleSortByName = () => {
    setBudget((prevBudget) =>
      [...prevBudget].sort(function (a, b) {
        if (sortByNameAscending) {
          return a.customBudget.toLowerCase() < b.customBudget.toLowerCase()
            ? -1
            : a.customBudget.toLowerCase() > b.customBudget.toLowerCase()
            ? 1
            : 0;
        } else {
          return a.customBudget.toLowerCase() > b.customBudget.toLowerCase()
            ? -1
            : a.customBudget.toLowerCase() < b.customBudget.toLowerCase()
            ? 1
            : 0;
        }
      })
    );
    setSortByNameAscending((prevValue) => !prevValue);
  };

  // Deletes a specific budget and shows a message to the user letting them know about their successful action.
  const handleDeleteBudget = (index) => {
    setFiltered((prevBudget) => {
      const updatedBudget = [...prevBudget];
      updatedBudget.splice(index, 1);
      return updatedBudget;
    });

    setBudget((prevBudget) => {
      const updatedBudget = [...prevBudget];
      updatedBudget.splice(index, 1);
      return updatedBudget;
    });

    localStorage.setItem('Budget', JSON.stringify(budget));
  };

  // Clears all the budgets at once.
  const handleClearBudget = () => {
    setBudget([]);
    localStorage.removeItem('Budget');
  };

  const [currentPage, setCurrentPage] = useState(1);
  const budgetsPerPage = 4;

  // Calculates the indexes of budgets to display on the current page just so the user can navigate the site better.
  const indexOfLastBudget = currentPage * budgetsPerPage;
  const indexOfFirstBudget = indexOfLastBudget - budgetsPerPage;
  const currentBudgets = filtered.slice(indexOfFirstBudget, indexOfLastBudget);

  // Calculates the total number of pages based on the number of budgets.
  const totalPages = Math.ceil(filtered.length / budgetsPerPage);

  // Changes the current page.
  const changePage = (page) => {
    setCurrentPage(page);
  };
  
  // Goes to the previous page.
  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };
  
  // Goes to the next page.
  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <RightPaneStyled>
      <h1 style={{ fontWeight: 300, fontSize: 30 }}>· did you miss something? ·</h1>
  
      <img style={{ width: 250 }} src={filterIcon} alt="Indie game search animation" />
  
      <div>
        <input
          id="search"
          placeholder="Find your budget"
          name="budgetFinder"
          type="text"
          style={{
            height: 30,
            margin: 10,
            color: '#f1a2be',
            backgroundColor: 'black',
            backgroundImage: `url('https://cdn2.hubspot.net/hubfs/4004166/bioticresearch_website_assets/images/search_icon.png')`,
            backgroundPosition: 'right',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            borderRadius: '10px',
            textAlign: 'left',
          }}
          onChange={handleFinder}
        />
  
        <SortButton onClick={handleSortByDate}>Order by date</ SortButton>
  
        <SortButton onClick={handleSortByName}>Order by name</ SortButton>
      </div>
  
      {currentBudgets.length !== 0 ? (
        currentBudgets.map((budget, index) => (
          <UserBudget
            customBudget={budget.customBudget}
            user={budget.user}
            key={index}
            currentDate={budget.currentDate}
            offeredServices={budget.offeredServices}
            numServices={budget.numServices}
            numLanguages={budget.numLanguages}
            totalExpenses={budget.totalExpenses}
            onDelete={() => handleDeleteBudget(index)}
          />
        ))
      ) : (
        <p style={{ letterSpacing: '0.06rem' }}>· no budgets found ·</p>
      )}
  
      {/* Pagination UI */}
      <div>
        <PaginationButton onClick={goToPreviousPage} disabled={currentPage === 1}>
          &lt;
        </ PaginationButton>
        {Array.from({ length: totalPages }, (_, index) => (
          index + 1 === currentPage ? (
          <CurrentPage key={index} onClick={() => changePage(index + 1)}>
            {index + 1}
            </CurrentPage>
          ) : (
          <NumericPagination key={index} onClick={() => changePage(index + 1)}>
            {index + 1}
          </NumericPagination>
          )
        ))}
        <PaginationButton onClick={goToNextPage} disabled={currentPage === totalPages}>
          &gt;
        </ PaginationButton>
      </div>
  
      <button onClick={handleClearBudget} style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
        <img src={clearButton} alt="Pixel reset button" />
      </button>
    </ RightPaneStyled>
  );
};

export default RightPane;
