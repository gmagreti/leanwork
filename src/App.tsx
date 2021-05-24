import React, { useState } from 'react';
import Modal from 'react-modal';
import { Dasboard } from './components/Dashboard';
import { GlobalStyle } from './styles/global';
function App() {
  return (
    <>
      <Dasboard />
      <GlobalStyle />
    </>
  );
}

export default App;
