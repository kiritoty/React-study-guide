import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './03-hooks/16-自定义hooks'

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(<App/>);