import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import NiceModal from '@ebay/nice-modal-react';

import { UserInfoProvider } from '@/contexts/UserInfo.jsx';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* TODO: DELETE 전역 상태관리 또는 API 추가시 Provider 제거
     우선 임시로 state 기반으로 동작하는거 확인용 - 지우
     */}
    <RecoilRoot>
      <NiceModal.Provider>
        <UserInfoProvider>
          <App />
        </UserInfoProvider>
      </NiceModal.Provider>
    </RecoilRoot>
  </React.StrictMode>,
);
