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
  const ChargeButton = <S.Button>충전</S.Button>;
  const AddressButton = <S.Button>배송지 변경</S.Button>;

  return (
    <S.UserProfileWrapper>
      <S.Avatar src="" alt="" />
      <S.UserInfoWrapper>
        <TextField inputType="email" label="이메일" value={USER.email} />
        <S.Line />
        <TextField inputType="password" label="비밀번호" value={USER.password} editable />
        <S.Line />
        <TextField label="이름" value={USER.name} editable />
        <S.Line />
        <TextField label="전화번호" value={USER.phoneNumber} editable />
        <S.Line />
        <TextField label="페이머니" value={USER.payMoney} rightSlot={ChargeButton} />
        <S.Line />
        <TextField label="배송지" value={USER.address} rightSlot={AddressButton} />
        <S.Line />
      </S.UserInfoWrapper>
    </S.UserProfileWrapper>
  );
};

export default UserProfile;
