import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import MyPage from '@/pages/MyPage/MyPage.jsx';
import MainHeader from './layouts/MainHeader';
import Cart from './pages/cart/Cart';
import Detail from './pages/Detail';
import Main from './pages/main/Main';
import Payment from './pages/payment/Payment';
import Join from './pages/Join/Join';
import Login from './pages/Login/Login';
import Write from './pages/Write/Write';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          index: true,
          element: <Main />,
        },
        {
          path: 'detail',
          element: <Detail />,
        },
        {
          path: 'join',
          element: <Join />,
        },
        {
          path: 'mypage',
          element: <MyPage />,
        },
        {
          path: 'payment',
          element: <Payment />,
        },
        {
          path: 'cart',
          element: <Cart />,
        },
        {
          path: 'write',
          element: <Write />,
          children: [
            {
              path: ':productId',
              element: <Write />,
            },
          ],
        },
        {
          path: 'login',
          element: <Login />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

const Root = () => {
  return (
    <>
      <MainHeader />
      <main style={{ marginTop: '7rem' }}>
        <Outlet />
      </main>
    </>
  );
};
