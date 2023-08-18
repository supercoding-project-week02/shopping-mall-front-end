import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import MyPage from '@/pages/MyPage/MyPage.jsx';
import MainHeader from './layouts/MainHeader';
import Cart from './pages/cart/Cart';
import Detail from './pages/Detail';
import Join from './pages/Join/Join';
import Main from './pages/Main/Main';
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
