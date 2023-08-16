import { Icon } from '@/components/common/Icon/Icon';
import UserInput from '@/components/common/UserInput/UserInput';
import * as S from './Join.styles';

const Join = () => {
  return (
    <S.Container>
      <S.CenterBox>
        <Icon name="IconProfile" size={60} />
        <S.AddProfile>프로필 사진 추가</S.AddProfile>
        <UserInput check={true} />
        <UserInput />
        <UserInput />
        <S.Label>이름(필수)</S.Label>
        <UserInput />
        <S.Label>연락처</S.Label>
        <UserInput />
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
      </S.CenterBox>
    </S.Container>
  );
};

export default Join;
