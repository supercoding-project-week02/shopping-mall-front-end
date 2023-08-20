import Button from '@/components/common/Button/Button';
import { Icon } from '@/components/common/Icon/Icon';
import UserInput from '@/components/common/UserInput/UserInput';
import RadioInput from '@/components/RadioInput/RadioInput';
import { theme } from '@/styles/theme';
import * as S from './Join.styles';

const Join = () => {
  const checkBtn = <S.CheckBtn>중복확인</S.CheckBtn>;
  return (
    <S.Container>
      <S.Form>
        <Icon name="IconProfile" size={60} />
        <S.AddProfile>프로필 사진 추가</S.AddProfile>
        <UserInput button={checkBtn} placeholder="이메일" type="email" />
        <UserInput placeholder="비밀번호" type="password" />
        <UserInput placeholder="비밀번호 확인" type="password" />
        <S.Label>이름(필수)</S.Label>
        <UserInput placeholder="이름을 입력하세요" type="text" />
        <S.Label>연락처</S.Label>
        <UserInput placeholder="연락처" type="text" />
        <S.RadioBox>
          <RadioInput id="buyer" name="user" value="buyer" defaultChecked="true" label="구매자" />
          <RadioInput id="seller" name="user" value="seller" label="판매자" />
        </S.RadioBox>
        <Button bgColor={theme.color.black} fontColor="white" borderRadius="10px" text="가입하기" />
      </S.Form>
    </S.Container>
  );
};

export default Join;
