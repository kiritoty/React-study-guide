import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './02-advanced/06-状态提升'

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(<App/>);