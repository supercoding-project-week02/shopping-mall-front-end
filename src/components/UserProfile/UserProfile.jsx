import { useState } from 'react';

import TextField from '@/components/common/TextField/TextField.jsx';
import * as S from './UserProfile.styles.jsx';

const USER = {
  email: 'helloworld@gmail.com',
  password: '1234',
  name: 'Tester',
  phoneNumber: '010-1234-5678',
  payMoney: 20000,
  address: '서울시 마포구',
};

const UserProfile = () => {
  const [user, setUser] = useState(USER);

  const ChargeButton = <S.Button>충전</S.Button>;
  const AddressButton = <S.Button>배송지 변경</S.Button>;

  const handleChangeUser = (name, value) => {
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <S.UserProfileWrapper>
      <S.Avatar src="" alt="avatar" />
      <S.UserInfoWrapper>
        <TextField inputType="email" label="이메일" value={user.email} />
        <S.Line />
        <TextField
          inputType="password"
          name="password"
          label="비밀번호"
          value={user.password}
          editable
          onSubmit={handleChangeUser}
        />
        <S.Line />
        <TextField
          label="이름"
          name="name"
          value={user.name}
          editable
          onSubmit={handleChangeUser}
        />
        <S.Line />
        <TextField
          label="전화번호"
          name="phoneNumber"
          value={user.phoneNumber}
          editable
          onSubmit={handleChangeUser}
        />
        <S.Line />
        <TextField label="페이머니" value={user.payMoney} rightSlot={ChargeButton} />
        <S.Line />
        <TextField label="배송지" value={user.address} rightSlot={AddressButton} />
        <S.Line />
      </S.UserInfoWrapper>
    </S.UserProfileWrapper>
  );
};

export default UserProfile;
