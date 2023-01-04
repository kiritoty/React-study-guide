import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './04-routes/01-routes'

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(<App/>);