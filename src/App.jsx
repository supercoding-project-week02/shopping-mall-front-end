import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import MyPage from '@/pages/MyPage/MyPage.jsx';
import MainHeader from './layouts/MainHeader';
import Cart from './pages/cart/Cart';
import Detail from './pages/Detail/Detail';
import Join from './pages/Join/Join';
import Kakao from './pages/Kakao';
import Login from './pages/Login/Login';
import Main from './pages/main/Main';
import Payment from './pages/payment/Payment';
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
        {
          path: 'auth/kakao',
          element: <Kakao />,
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
      <main>
        <Outlet />
      </main>
    </>
  );
};
