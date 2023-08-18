import { Link } from 'react-router-dom';

import UserInput from '@/components/common/UserInput/UserInput';
import HeaderLogo from '@/layouts/HeaderLogo';
import { theme } from '@/styles/theme';
import * as S from './Login.styles';

const Login = () => {
  const linkToKakaoLogin = (e) => {
    e.preventDefault();
    console.log('kakao로그인');
  };
  return (
    <S.LoginContainer>
      <S.LoginForm>
        <HeaderLogo />
        <UserInput type="email" required placeholder="이메일" />
        <UserInput type="password" required placeholder="비밀번호" />
        <S.LoginButton
          bgColor={theme.color.black}
          fontColor="white"
          borderRadius="10px"
          text="로그인"
        />
        <S.BorderDiv>
          <div></div>
          <p>또는</p>
          <div></div>
        </S.BorderDiv>
        <S.KakaoLoginButton
          onClick={linkToKakaoLogin}
          bgColor="	#FEE500"
          fontColor={theme.color.black}
          borderRadius="10px"
          text="카카오 로그인"
        />
        <S.LinkToJoin>
          계정이 없으신가요? <Link to="/join">회원가입하러가기</Link>
        </S.LinkToJoin>
      </S.LoginForm>
    </S.LoginContainer>
  );
};

export default Login;
