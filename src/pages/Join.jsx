import styled from '@emotion/styled';

import { Icon } from '@/components/common/Icon/Icon';
import Input from '@/components/Input/Input';

const Join = () => {
  return (
    <Container>
      <CenterBox>
        <Icon name="IconProfile" size={60} />
        <AddProfile>프로필 사진 추가</AddProfile>
        <Input check={true} />
        <Input />
        <Input />
        <Label>이름(필수)</Label>
        <Input />
        <Label>연락처</Label>
        <Input />
        <div>
          <span>
            <input type="radio" id="buyer" name="user" value="buyer" checked />
            <label htmlFor="buyer">구매자</label>
          </span>
          <span>
            <input type="radio" id="seller" name="user" value="seller" />
            <label htmlFor="seller">판매자</label>
          </span>
        </div>
        <button>가입하기</button>
      </CenterBox>
    </Container>
  );
};

export default Join;

const Container = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
`;

const CenterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;
  height: auto;
  /* background-color: aqua; */
`;

const AddProfile = styled.span`
  font-size: 12px;
  margin-bottom: 19px;
`;

const Label = styled.label`
  align-self: flex-start;
  margin-top: 45px;
`;
