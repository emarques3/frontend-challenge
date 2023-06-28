import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const AppRoutes = ({ routes }) => (
  <BrowserRouter>
    <Routes>
      {routes.map(({ Component, path }) => (
        <Route
          key="activeRoute"
          path={path}
          element={
            <Component path={path} />
          }
        />
      ))}
    </Routes>
  </BrowserRouter>
);
