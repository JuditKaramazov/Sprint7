import React, { useEffect, useState } from 'react';
import { data } from '../../../../data/data';
import { Checkbox } from '../../../../components/Checkbox/Checkbox';
import mainBg from '../../../../assets/mainBg.gif';
import submitButton from '../../../../assets/submitButton.png';

import { LeftPane as LeftPaneStyled } from './LeftPane.styled';
import { toast } from 'react-toastify';

const LeftPane = ({ setBudget }) => {
  const [totalExpenses, setTotalExpenses] = useState(0);
  
  // This useEffect controls the changes on the checkboxes and keeps the total updated.
  useEffect(() => {
    const inputListener = () => {
      const checkboxes = document.querySelectorAll('form input[type=checkbox]');
      const numServices = document.getElementById('numServices');
      const numLanguages = document.getElementById('numLanguages');
  
      let total = Object.entries(checkboxes).reduce((accumulator, [_, currentValue]) => {
        if (currentValue.value.length > 0 && currentValue.checked) {
          return accumulator + Number.parseInt(currentValue.value, 10);
        }
        return accumulator;
      }, 0);
  
      if (numServices && numLanguages) {
        total += (numServices.value || 0) * 30; // Calculate numServices * 30
        total += (numServices.value || 0) * (numLanguages.value || 0) * 30; // Calculate numServices * numLanguages * 30
      }
  
      setTotalExpenses(total);
      // Updates query parameters with selected options.
      const params = new URLSearchParams(window.location.search);
      
      checkboxes.forEach((checkbox) => {
        params.set(checkbox.name, checkbox.checked ? 'true' : 'false');
      });
      
      if (numServices && numLanguages) {
        params.set('numServices', numServices.value);
        params.set('numLanguages', numLanguages.value);
      }
      
      const newUrl = `${window.location.pathname}?${params.toString()}`;
      window.history.replaceState(null, '', newUrl);
    };

    document.addEventListener('input', inputListener);
    
    // After every re-render with changed dependencies, React will first run the cleanup function (if you provided it)
    // with the old values, and then run your setup function with the new values. After your component is removed from
    // the DOM, React will run your cleanup function.
    return () => document.removeEventListener('input', inputListener);
  }, []);

  const clearForm = () => {
    document.querySelector('form').reset();
  };

  const getBudgetObject = (event) => {
    const currentDate = new Date();
  
    const checkboxes = Object.fromEntries(
      Object.entries(event.target.elements).flatMap(([key, value]) =>
        Number.isNaN(Number.parseInt(key, 10)) ? [[key, value]] : [],
      ),
    );
  
    const { budgetName, numLanguages, numServices, userName } = checkboxes;
    const selectedServices = Object.entries(checkboxes)
      .filter(([key, value]) => value.checked && key !== 'offeredServices') // Filters out the 'offeredServices' checkbox.
      .map(([key]) => key);
  
    return {
      checkboxesPrice: totalExpenses,
      currentDate: currentDate.toLocaleDateString() + ' ' + currentDate.toLocaleTimeString(),
      customBudget: budgetName.value,
      numLanguages: numLanguages?.value || '',
      numServices: numServices?.value || '',
      totalExpenses,
      user: userName.value,
      offeredServices: selectedServices.join(', '), // Concatenate the selected services into a comma-separated list
    };
  };

  const onSubmit = (event) => {
    event.preventDefault();

    setBudget((prevBudget) => [...prevBudget, getBudgetObject(event)]);

    toast.success('Budget submitted successfully!', {
      position: toast.POSITION.TOP_RIGHT,
    });

    clearForm();
  };

  return (
    <LeftPaneStyled>
      <form name="myForm" onSubmit={onSubmit}>
        <h1 style={{ fontWeight: 300, fontSize: 30 }}>· check out our latest services ·</h1>

        {data.map((element) => (
          <Checkbox key={element.option} {...element} />
        ))}

        <p> <b>Total:</b> {totalExpenses}€</p>

        <img style={{ width: 200 }} src={mainBg} alt="Indie game animation" />

        <h2 style={{ fontWeight: 300 }}>· save your budget ·</h2>

        <input 
        placeholder="User name" 
        name="userName" 
        type="text" 
        style={{
          color: '#f1a2be',
          backgroundColor: 'black',
          borderRadius: '10px',
          margin: '3px',
          textAlign: 'center',
        }}
        />

        <input placeholder="Budget name" 
        name="budgetName" 
        type="text"
        style={{
          color: '#f1a2be',
          backgroundColor: 'black',
          borderRadius: '10px',
          margin: '3px',
          textAlign: 'center'
        }}
        />

        <div>
          <button type="submit" style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
            <img src={submitButton} alt="Pixel save button" />
          </button>
        </div>
      </form>
    </LeftPaneStyled>
  );
};

export default LeftPane;
