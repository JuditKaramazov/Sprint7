import React, { useState } from 'react';
import { SecondaryForm } from '../SecondaryForm/SecondaryForm';

export const Checkbox = ({ advance, index, name, price, option }) => {
  const [show, setShow] = useState(false);

  return (
    <div key={index} style={{ display: 'grid', rowGap: '8px' }}>
      <div>
        <input
          type="checkbox"
          id={name}
          name={name}
          onChange={() => {
            if (advance) setShow((prevState) => !prevState);
          }}
          value={price}
        />

        <label htmlFor={name}>
          {option} {price}€
        </label>
      </div>

      {advance && show && <SecondaryForm />}
    </div>
  );
};
