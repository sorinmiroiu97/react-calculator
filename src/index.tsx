import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import CalculatorParent from './scripts/views/calculator/CalculatorParent';

ReactDOM.render(
  <React.StrictMode>
    <CalculatorParent />
  </React.StrictMode>,
  document.getElementById('root')
);
