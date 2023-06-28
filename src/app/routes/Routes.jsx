import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageWrapper } from 'domains/shell/experience/components/PageWrapper';

export const AppRoutes = ({ routes }) => (
  <BrowserRouter>
    <Routes>
      {routes.map(({ Component, path }) => (
        <Route
          key="activeRoute"
          path={path}
          element={
            <PageWrapper>
              <Component path={path} />
            </PageWrapper>
          }
        />
      ))}
    </Routes>
  </BrowserRouter>
);
