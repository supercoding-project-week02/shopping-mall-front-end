import { Link, useNavigate } from 'react-router-dom';

import { login } from '@/apis/user.js';
import UserInput from '@/components/common/UserInput/UserInput';
import { localstorageKey } from '@/constant/index.js';
import { useInputs } from '@/hooks/useInputs.js';
import HeaderLogo from '@/layouts/HeaderLogo';
import { theme } from '@/styles/theme';
import { saveItem } from '@/utils/localstorage.js';
import * as S from './Login.styles';

const Login = () => {
  const navigate = useNavigate();

  // TODO: 실제 서비스할 때는 제거! (매번 입력하기 싫어서 입력)
  const { value: loginForm, onChange } = useInputs({
    email: 'admin@gmail.com',
    password: 'admin1234',
  });

  const linkToKakaoLogin = (e) => {
    e.preventDefault();
    console.log('kakao로그인');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginForm.email.trim() === '' || loginForm.password.trim() === '') return;

    login({
      email: loginForm.email,
      password: loginForm.password,
    }).then((result) => {
      // TODO: 로그인 성공 후 localstorage 에 값가져오기 및 전역 상태로 상태 추가
      if (result.status === 200) {
        saveItem(localstorageKey.auth, result.data.token);
        // TODO: user 를 전역 상태로 관리하면 해당 부분 삭제
        saveItem(localstorageKey.user, result.data);
        navigate('/');
      }
    });
  };

  return (
    <S.LoginContainer>
      <S.LoginForm onSubmit={handleLogin}>
        <HeaderLogo />
        <UserInput
          type="email"
          required
          placeholder="이메일"
          name="email"
          value={loginForm.email}
          onChange={onChange}
        />
        <UserInput
          type="password"
          required
          placeholder="passowrd"
          name="password"
          value={loginForm.password}
          onChange={onChange}
        />
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
