// TODO: API 나오면 해당 부분 제거 할 수도 있음
import { createContext, useContext, useState } from 'react';

export const UserInfoContext = createContext(null);

const USER = {
  email: 'helloworld@gmail.com',
  password: '1234',
  name: 'Tester',
  phoneNumber: '010-1234-5678',
  payMoney: 20000,
  address: '서울시 마포구',
};
export const UserInfoProvider = ({ children }) => {
  const [user, setUser] = useState(USER);

  const handleChangeUser = (name, value) => {
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleChargePayMoney = (amount) => {
    handleChangeUser('payMoney', user.payMoney + Number(amount));
  };

  const handleChangeAddress = (address) => {
    handleChangeUser('address', address);
  };

  return (
    <UserInfoContext.Provider
      value={{
        user,
        onChangeUser: handleChangeUser,
        onChargePayMoney: handleChargePayMoney,
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
