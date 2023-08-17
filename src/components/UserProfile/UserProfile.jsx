import { useModal } from '@ebay/nice-modal-react';

import { Icon } from '@/components/common/Icon/Icon.jsx';
import TextField from '@/components/common/TextField/TextField.jsx';
import ChargePayMoneyModal from '@/components/modals/ChargePayMoenyModal/ChargePayMoenyModal.jsx';
import ShippingAddressModal from '@/components/modals/ShippingAddressModal/ShippingAddressModal.jsx';
import { useUserInfo } from '@/contexts/UserInfo.jsx';
import * as S from './UserProfile.styles.jsx';

const UserProfile = () => {
  const { user, onChangeUser } = useUserInfo();
  const chargePayMoneyModal = useModal(ChargePayMoneyModal);
  const shippingAddressModal = useModal(ShippingAddressModal);

  const ChargeButton = <S.Button onClick={chargePayMoneyModal.show}>충전</S.Button>;
  const AddressButton = <S.Button onClick={shippingAddressModal.show}>배송지 변경</S.Button>;

  return (
    <S.UserProfileWrapper>
      {/* TODO: 추후에 이미지 추가 기능은 해당 부분으로 변경 */}
      {/*<S.Avatar src="" alt="avatar" />*/}
      <Icon name="IconProfile" size={100} />
      <S.UserInfoWrapper>
        <TextField inputType="email" label="이메일" value={user.email} />
        <S.Line />
        <TextField
          inputType="password"
          name="password"
          label="비밀번호"
          value={user.password}
          editable
          onSubmit={onChangeUser}
        />
        <S.Line />
        <TextField label="이름" name="name" value={user.name} editable onSubmit={onChangeUser} />
        <S.Line />
        <TextField
          label="전화번호"
          name="phoneNumber"
          value={user.phoneNumber}
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
        <TextField label="배송지" value={user.address} rightSlot={AddressButton} />
        <S.Line />
      </S.UserInfoWrapper>
    </S.UserProfileWrapper>
  );
};

export default UserProfile;
