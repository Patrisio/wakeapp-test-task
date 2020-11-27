import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import MainScreen from './components/MainScreen.js';
import Games from './components/Games.js';

function App() {
  return (
    <>
      <GlobalStyle />

      <div>
        <MainScreen />
        <Games />
      </div>
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    background: #060E2B;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  h1, h2 {
    margin: 0;
  }
`