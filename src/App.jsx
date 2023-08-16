import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import MainHeader from './layouts/MainHeader';
import Detail from './pages/Detail';
import Main from './pages/Main';

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
      ],
    },
    // {
    //   // id값으로 처리할 때 아래 주석을 풀고 진행 하시면 됩니다.
    //   // path: "/detail/:id"
    //   path: '/detail',
    //   element: <Detail />,
    // },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

const Root = () => {
  return (
    <>
      <MainHeader />
      <div style={{ marginTop: '7rem' }}>
        <Outlet />
      </div>
    </>
  );
};
