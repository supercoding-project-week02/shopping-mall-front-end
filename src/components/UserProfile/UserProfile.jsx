import { useRecoilValue } from 'recoil';
import { useModal } from '@ebay/nice-modal-react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { getUserInfo, updateUserInfo } from '@/apis/user.js';
import IconProfile from '@/assets/iconProfile.svg';
import TextField from '@/components/common/TextField/TextField.jsx';
import ChargePayMoneyModal from '@/components/modals/ChargePayMoenyModal/ChargePayMoenyModal.jsx';
// import ShippingAddressModal from '@/components/modals/ShippingAddressModal/ShippingAddressModal.jsx';
import AddressChangeButton from '@/components/UserProfile/AddressChangeButton.jsx';
import { QUERY_KEYS } from '@/queries/queryKeys.js';
import { customerState } from '@/recoil/atoms/userState.js';
import * as S from './UserProfile.styles.jsx';

const PHONE_NUMBER_REG = new RegExp('010-\\d{4}-\\d{4}', 'g');

const UserProfile = () => {
  // const { onChangeUser } = useUserInfo();
  const queryClient = useQueryClient();
  const isCustomer = useRecoilValue(customerState);

  const { data, isError } = useQuery(['profile'], getUserInfo);
  const { mutate: updateUserInfoMutate } = useMutation((payload) => updateUserInfo(payload));

  const chargePayMoneyModal = useModal(ChargePayMoneyModal);
  // const shippingAddressModal = useModal(ShippingAddressModal);

  const ChargeButton = <S.Button onClick={chargePayMoneyModal.show}>충전</S.Button>;
  const AddressButton = (
    <AddressChangeButton address={data ? data.data.address : {}}>배송지 변경</AddressChangeButton>
  );

  const handleChangeUserInfo = (name, value) => {
    const payload = {
      [name]: value,
    };

    updateUserInfoMutate(payload, {
      onSuccess: async () => {
        await queryClient.invalidateQueries([QUERY_KEYS.profile]);
      },
    });
  };

  const handleValidatePhoneNumber = (value) => {
    if (!PHONE_NUMBER_REG.test(value)) {
      alert('비밀번호 형식이 아닙니다. 010-0000-0000');
      return false;
    }

    return true;
  };

  const handleChangePhoneNumber = (event) => {
    const value = event.target.value;
    if (value.length >= 13) return value.slice(0, 13);
    return value
      .replace(/[^0-9]/g, '')
      .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
      .replace(/(-{1,2})$/g, '');
  };

  if (!data) return null;
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
        <TextField
          label="이름"
          name="name"
          value={user.name}
          editable
          onSubmit={handleChangeUserInfo}
          maxLength={13}
        />
        <S.Line />
        <TextField
          inputType="text"
          label="전화번호"
          name="phone"
          value={user.phone}
          editable
          onChangeInput={handleChangePhoneNumber}
          onSubmit={handleChangeUserInfo}
          validate={handleValidatePhoneNumber}
        />
        <S.Line />
        {isCustomer && (
          <>
            <TextField
              label="페이머니"
              value={user.payMoney.toLocaleString('ko-KR')}
              rightSlot={ChargeButton}
            />
            <S.Line />
            <TextField label="배송지" value={getAddress(user.address)} rightSlot={AddressButton} />
            <S.Line />
          </>
        )}
      </S.UserInfoWrapper>
    </S.UserProfileWrapper>
  );
};

function getAddress(address) {
  if (!address) return '';
  return `${address.address || ''} ${address.addressDetail || ''} (${address.zipCode || ''})`;
}

export default UserProfile;
