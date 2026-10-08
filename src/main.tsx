import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const mountElement = document.getElementById('root');

if (mountElement) {
  const root = createRoot(mountElement);
  root.render(<App />);
} else {
  // Safe fallback if #root is somehow missing or delayed in DOM
  const fallbackDiv = document.createElement('div');
  fallbackDiv.id = 'root';
  document.body.appendChild(fallbackDiv);
  const root = createRoot(fallbackDiv);
  root.render(<App />);
}
