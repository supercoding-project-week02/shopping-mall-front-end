import { Fragment } from 'react';

import { Sample } from '@/components/Sample';
import './App.css';
import { createBrowserRouter } from 'react-router-dom';
import Main from './pages/Main';
import Detail from './pages/Detail';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>
    },
    {
      // id값으로 처리할 때 아래 주석을 풀고 진행 하시면 됩니다.
      // path: "/detail/:id" 
      path: "/detail",
      element: <Detail/>
    },
  ])
  return (
    <Fragment>
      <Sample/>
    </Fragment>
  );
}

export default App;
