import React from 'react';
import { render } from 'react-dom';
import App from './components/App/app';

render(<App />, document.getElementById('root'));

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('sw.js');
  });
}