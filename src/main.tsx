import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const AdminPage = lazy(() => import('./pages/AdminPage'));
const AppPage = lazy(() => import('./pages/AppPage'));

import './assets/less/global.less';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppPage />} />
        <Route path="admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
