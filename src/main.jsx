import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import NiceModal from '@ebay/nice-modal-react';

import App from './App.jsx';
import store from './redux/store/mainStore.js';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* TODO: DELETE 전역 상태관리 또는 API 추가시 UserInfoProvider 제거
     우선 임시로 state 기반으로 동작하는거 확인용
     */}
    <Provider store={store}>
      <NiceModal.Provider>
        <App />
      </NiceModal.Provider>
    </Provider>
  </React.StrictMode>,
);
