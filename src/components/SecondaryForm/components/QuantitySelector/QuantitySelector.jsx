import React, { useRef, useState } from 'react';
import { Modal } from '../../../Modal/Modal';
import plusButton from '../../../../assets/plusButton.png';
import minusButton from '../../../../assets/minusButton.png';
import infoButton from '../../../../assets/infoButton.png';
import styled from 'styled-components';

const CollapsedOptions = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  & > div {
    display: flex;
    align-items: center;
  }
`;

export function QuantitySelector({ label, name, modalText, defaultValue }) {
  const ref = useRef(null);
  const [showModal, setShowModal] = useState(false);

  const dispatchInputEvent = (element) => {
    const newEvent = new Event('input', {
      bubbles: true,
    });

    element.dispatchEvent(newEvent);
  };

  const add = (event) => {
    event.preventDefault();
    if (ref.current) {
      ref.current.value = Number.parseInt(ref.current.value || '0', 10) + 1;
      dispatchInputEvent(ref.current);
    }
  };

  const subtract = (event) => {
    event.preventDefault();
    if (ref.current) {
      ref.current.value =
        Number.parseInt(ref.current.value, 10) - 1 >= 0 ? Number.parseInt(ref.current.value, 10) - 1 : 0;
      dispatchInputEvent(ref.current);
    }
  };

  return (
    <CollapsedOptions>
      <label className="textOptions" htmlFor={name}>
        {label}
      </label>

      <div>
        <button style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }} onClick={add}>
          <img src={plusButton} alt="Pixel plus button" />
        </button>

        <input
          ref={ref}
          id={name}
          name={name}
          defaultValue={defaultValue}
          type="text"
          pattern="[0-9]*"
          style={{
            color: '#f1a2be',
            backgroundColor: 'black',
            borderRadius: '10px',
            textAlign: 'center',
          }}
        />

        <button style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }} onClick={subtract}>
          <img src={minusButton} alt="Pixel minus button" />
        </button>

        <button
          className="infoButtonServices"
          style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
          onClick={(event) => {
            event.preventDefault();
            setShowModal(true);
          }}
        >
          <img src={infoButton} alt="Pixel information button" />
        </button>
      </div>

      <Modal showModal={showModal} setShowModal={setShowModal}>
        {modalText}
      </Modal>
    </CollapsedOptions>
  );
}
