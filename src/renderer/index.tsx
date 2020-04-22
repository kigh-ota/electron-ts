import React from 'react';
import ReactDom from 'react-dom';

// Disable drag & drop
document.addEventListener('dragover', (event) => event.preventDefault());
document.addEventListener('drop', (event) => event.preventDefault());

const containerEl = document.getElementById('contents');

ReactDom.render(<h1>electron-ts</h1>, containerEl);
