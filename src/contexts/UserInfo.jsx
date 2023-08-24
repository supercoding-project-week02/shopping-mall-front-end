// TODO: API 나오면 해당 부분 제거 할 수도 있음
import { createContext, useContext, useEffect, useState } from 'react';

import { getUserInfo, getUserPayMoney } from '@/apis/user.js';

export const UserInfoContext = createContext(null);

export const UserInfoProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserInfo().then((data) => {
      setUser(data.data);
    });

    getUserPayMoney().then((data) => {
      if (data.status === 200) {
        // GYU-TODO: 임시 구현으로 추후 삭제 예정, 다른 걸로 대체
        setUser((prev) => ({ ...prev, payMoney: data.data.leftMoney || 0 }));
      }
    });
  }, []);

  const handleChangeUser = (name, value) => {
    setUser({
      ...user,
      [name]: value,
    });
  };

  // const handleChargePayMoney = (amount) => {
  //   handleChangeUser('payMoney', user.payMoney + Number(amount));
  // };

  const handleChangeAddress = (address) => {
    handleChangeUser('address', address);
  };

  return (
    <UserInfoContext.Provider
      value={{
        user,
        onChangeUser: handleChangeUser,
        // onChargePayMoney: handleChargePayMoney,
        onChangeAddress: handleChangeAddress,
      }}
    >
      {children}
    </UserInfoContext.Provider>
  );
};

export const useUserInfo = () => {
  const userInfoContext = useContext(UserInfoContext);
  if (!userInfoContext) {
    throw new Error('Could Not Found UserInfoContext');
  }
  return userInfoContext;
};
