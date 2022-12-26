import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
console.log(container)
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(<h1>hello</h1>);