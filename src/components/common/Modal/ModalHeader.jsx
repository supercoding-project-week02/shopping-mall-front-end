import { Icon } from '@/components/common/Icon/Icon.jsx';
import * as S from './Modal.styles.jsx';

const ModalHeader = ({ onClose }) => {
  return (
    <S.ModalHeader>
      <Icon name="IconX" size={20} onClick={onClose} />
    </S.ModalHeader>
  );
};

export default ModalHeader;
