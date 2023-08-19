import NiceModal, { useModal } from '@ebay/nice-modal-react';

import Modal from '@/components/common/Modal/Modal.jsx';
import ModalContent from '@/components/common/Modal/ModalContent.jsx';
import ModalHeader from '@/components/common/Modal/ModalHeader.jsx';
import { useUserInfo } from '@/contexts/UserInfo.jsx';
import { useInput } from '@/hooks/useInput.js';
import * as S from './ShippingAddressModal.styles.jsx';

// TODO: UI 가 Charge 랑 같으면 추상화해서 하나의 컴포넌트로 처리하기!
const ShippingAddressModal = () => {
  const modal = useModal();
  const { user, onChangeAddress } = useUserInfo();
  const { value, onChange, onReset } = useInput('');

  const handleChangeAddress = () => {
    if (value.trim() === '') return;

    onChangeAddress(value);
    modal.hide();
    onReset();
  };

  const isActive = value.trim() !== '';
  return (
    <Modal visible={modal.visible} onClose={modal.hide} modal={modal}>
      <ModalHeader onClose={modal.hide} />
      <ModalContent>
        <S.ShippingAddressModalContent>
          <span>현재 주소 : {user.address}</span>
          <S.ChargeAmountInput
            placeholder="수정할 배송지를 입력해주세요"
            value={value}
            onChange={onChange}
          />
          <S.ChargeButton disabled={!isActive} onClick={handleChangeAddress}>
            배송지 변경
          </S.ChargeButton>
        </S.ShippingAddressModalContent>
      </ModalContent>
    </Modal>
  );
};

export default NiceModal.create(ShippingAddressModal);
