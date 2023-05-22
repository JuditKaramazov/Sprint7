import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SplitPane } from './Home.styled';
import LeftPane from './components/LeftPane/LeftPane';
import RightPane from './components/RightPane/RightPane';

export default function Home() {
  const [budget, setBudget] = useState(JSON.parse(localStorage.getItem('Budget')) || []);

  return (
    <SplitPane>
      <LeftPane setBudget={setBudget} />

      <RightPane budget={budget} setBudget={setBudget} />

      <ToastContainer toastStyle={{ color: 'black', backgroundColor: '#ededed' }} />
    </SplitPane>
  );
}
