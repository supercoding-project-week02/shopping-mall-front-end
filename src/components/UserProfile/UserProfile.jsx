import { useModal } from '@ebay/nice-modal-react';
import { useQuery } from '@tanstack/react-query';

import { getUserInfo } from '@/apis/user.js';
import IconProfile from '@/assets/iconProfile.svg';
import TextField from '@/components/common/TextField/TextField.jsx';
import ChargePayMoneyModal from '@/components/modals/ChargePayMoenyModal/ChargePayMoenyModal.jsx';
import ShippingAddressModal from '@/components/modals/ShippingAddressModal/ShippingAddressModal.jsx';
import { useUserInfo } from '@/contexts/UserInfo.jsx';
import * as S from './UserProfile.styles.jsx';

const UserProfile = () => {
  const { onChangeUser } = useUserInfo();

  const { data, isError } = useQuery(['profile'], getUserInfo);
  const chargePayMoneyModal = useModal(ChargePayMoneyModal);
  const shippingAddressModal = useModal(ShippingAddressModal);

  const ChargeButton = <S.Button onClick={chargePayMoneyModal.show}>충전</S.Button>;
  const AddressButton = <S.Button onClick={shippingAddressModal.show}>배송지 변경</S.Button>;

  if (!data) {
    // 데이터가 올바르게 오지 않는 경우 처리 필요
    return null;
  }

  if (isError) return <div>에러가 발생했습니다.</div>;
  const user = data.data;

  return (
    <S.UserProfileWrapper>
      {/* TODO: 추후에 이미지 추가 기능은 해당 부분으로 변경 */}
      <S.Avatar src={user.imageUrl || IconProfile} alt="avatar" />
      <S.UserInfoWrapper>
        <TextField inputType="email" label="이메일" value={user.email} />
        <S.Line />
        {/*<TextField*/}
        {/*  inputType="password"*/}
        {/*  name="password"*/}
        {/*  label="비밀번호"*/}
        {/*  value={user.password}*/}
        {/*  editable*/}
        {/*  onSubmit={onChangeUser}*/}
        {/*/>*/}
        {/*<S.Line />*/}
        <TextField label="이름" name="name" value={user.name} editable onSubmit={onChangeUser} />
        <S.Line />
        <TextField
          label="전화번호"
          name="phone"
          value={user.phone}
          editable
          onSubmit={onChangeUser}
        />
        <S.Line />
        <TextField
          label="페이머니"
          value={user.payMoney.toLocaleString('ko-KR')}
          rightSlot={ChargeButton}
        />
        <S.Line />
        <TextField label="배송지" value={getAddress(user.address)} rightSlot={AddressButton} />
        <S.Line />
      </S.UserInfoWrapper>
    </S.UserProfileWrapper>
  );
};

function getAddress(address) {
  if (!address) return '';
  return `${address.address} ${address.addressDetail} (${address.zipCode})`;
}

export default UserProfile;
