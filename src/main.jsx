import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import NiceModal from '@ebay/nice-modal-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { UserInfoProvider } from '@/contexts/UserInfo.jsx';
import App from './App.jsx';
import './index.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* TODO: DELETE 전역 상태관리 또는 API 추가시 Provider 제거
     우선 임시로 state 기반으로 동작하는거 확인용 - 지우
     */}
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <UserInfoProvider>
          <NiceModal.Provider>
            <App />
          </NiceModal.Provider>
        </UserInfoProvider>
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>,
);
