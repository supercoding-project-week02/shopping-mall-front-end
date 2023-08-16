import { Fragment } from 'react';

import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './pages/Main';
import Detail from './pages/Detail';
// import MainHeader from './layouts/MainHeader';
import Cart from './pages/cart/Cart';

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
    },
    {
      path: '/cart',
      element: <Cart />,
    }
  ]);
  return (
    <Fragment>
      {/* <MainHeader /> */}
      <RouterProvider router={router} />
    </Fragment>
  );
}

export default App;
