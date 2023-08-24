import { Icon } from '@/components/common/Icon/Icon.jsx';

export default function Button() {
  return (
    <ButtonWrapper>
      <PlusCartButton>
        <h2>장바구니</h2>
      </PlusCartButton>
      <ClickHeartButton>
        <h2>찜하기</h2>
        <Icon name="emmptyHeart" />
      </ClickHeartButton>
    </ButtonWrapper>
  );
}

const Button = styled.span`
  display: flex;
`;

const PlusCartButton = styled.div`
  width: 208px;
  height: 52px;
`;

const ClickHeartButton = styled.div`
  width: 208px;
  height: 52px;
`;
