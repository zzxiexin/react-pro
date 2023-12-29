import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from '@config/router/routes';
import Layout from '@pages/Layout';
import { AuthContent } from '@config/router/Auth/useAuth';
import RequireAuth from '@src/config/router/Auth/requireAuth';
import { useReducer } from 'react';
import { initialState, reducer } from '@store/index';

function App() {
  const [userInfo, dispatch] = useReducer(reducer, initialState);
  console.log('userInfo', userInfo);
  return (
    <AuthContent.Provider value={{ name: userInfo?.name, update_user_info: (arg) => dispatch({ playload: arg }) }}>
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
