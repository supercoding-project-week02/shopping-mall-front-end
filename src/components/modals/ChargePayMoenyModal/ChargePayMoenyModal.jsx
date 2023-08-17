import NiceModal, { useModal } from '@ebay/nice-modal-react';

import Modal from '@/components/common/Modal/Modal.jsx';
import ModalContent from '@/components/common/Modal/ModalContent.jsx';
import ModalHeader from '@/components/common/Modal/ModalHeader.jsx';
import { useUserInfo } from '@/contexts/UserInfo.jsx';
import { useInput } from '@/hooks/useInput.js';
import * as S from './ChargePayMoenyModal.styles.jsx';

const ChargePayMoenyModal = () => {
  const modal = useModal();
  const { user, onChargePayMoney } = useUserInfo();
  const { value, onChange, onReset } = useInput('');

  const handleCharge = () => {
    if (value.trim() === '') return;

    // TODO: 충전하기 로직 수행
    onChargePayMoney(value);
    modal.hide();
    onReset();
  };

  const isActive = value.trim() !== '';
  return (
    <Modal modal={modal} visible={modal.visible} onClose={modal.hide}>
      <ModalHeader onClose={modal.hide} />
      <ModalContent>
        <S.PayMoneyModalContent>
          <span>현재 금액 : {user.payMoney.toLocaleString('ko-KR')}</span>
          <S.ChargeAmountInput
            type="number"
            placeholder="충전할 금액을 입력해주세요"
            value={value}
            onChange={onChange}
          />
          <S.ChargeButton disabled={!isActive} onClick={handleCharge}>
            충전하기
          </S.ChargeButton>
        </S.PayMoneyModalContent>
      </ModalContent>
    </Modal>
  );
};

export default NiceModal.create(ChargePayMoenyModal);
