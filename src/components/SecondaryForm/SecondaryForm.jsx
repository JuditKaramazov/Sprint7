import React from 'react';
import { InnerForm } from './SecondaryForm.styled';
import { QuantitySelector } from './components/QuantitySelector/QuantitySelector';

export function SecondaryForm() {
  return (
    <InnerForm>
      <QuantitySelector
        label="Number of prototypes & testing:"
        name="numServices"
        modalText="Here, you'll find the number of development services that you can ask our programmers to work on. Remember that
        testing is essential!"
        defaultValue={1}
      />

      <QuantitySelector
        label="Number of languages:"
        name="numLanguages"
        modalText="In this case, we're showing you the amount of languages that we'll add to the chosen prototypes. Feel free to
        add as many as you wish!"
        defaultValue={0}
      />
    </InnerForm>
  );
}
