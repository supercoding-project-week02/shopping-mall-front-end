import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import MyPage from '@/pages/MyPage/MyPage.jsx';
import MainHeader from './layouts/MainHeader';
import Cart from './pages/cart/Cart';
import Detail from './pages/Detail';
<<<<<<< HEAD
=======
import Join from './pages/Join/Join';
import Login from './pages/Login/Login';
>>>>>>> dev
import Main from './pages/Main/Main';

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
