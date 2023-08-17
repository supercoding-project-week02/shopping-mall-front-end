import { Icon } from '@/components/common/Icon/Icon';
import UserInput from '@/components/common/UserInput/UserInput';
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
          <span>
            <input type="radio" id="buyer" name="user" value="buyer" defaultChecked />
            <label htmlFor="buyer">구매자</label>
          </span>
          <span>
            <input type="radio" id="seller" name="user" value="seller" />
            <label htmlFor="seller">판매자</label>
          </span>
        </S.RadioBox>
        <button>가입하기</button>
      </S.Form>
    </S.Container>
  );
};

export default Join;
