import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from '@config/router/routes';
import Layout from '@pages/Layout';
import { AuthContent } from '@config/router/Auth/useAuth';
import RequireAuth from '@src/config/router/Auth/requireAuth';
import { useState } from 'react';
import type { USER_INFO } from '@config/router/Auth/useAuth';

function App() {
  const [userInfo, setUserInfo] = useState<USER_INFO>({ name: '' });
  return (
    <AuthContent.Provider value={{ name: userInfo?.name, updateUserInfo: (arg) => setUserInfo(arg as USER_INFO) }}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            {routes?.map(({ path, element: Element, requireAuth }) => (
              <Route
                key={path}
                path={path}
                element={
                  requireAuth ? (
                    <RequireAuth>
                      <Element />
                    </RequireAuth>
                  ) : (
                    <Element />
                  )
                }
              />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContent.Provider>
  );
}

export default App;
