import { Fragment } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainHeader from './layouts/MainHeader';
import Detail from './pages/Detail';
import Main from './pages/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
    },
    {
      // id값으로 처리할 때 아래 주석을 풀고 진행 하시면 됩니다.
      // path: "/detail/:id"
      path: '/detail',
      element: <Detail />,
    }
  ]);
  return (
    <Fragment>
      <MainHeader />
      <RouterProvider router={router} />
    </Fragment>
  );
}

export default App;
