import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { login } from '@/apis/user.js';
import UserInput from '@/components/common/UserInput/UserInput';
import { localstorageKey } from '@/constant/index.js';
import { useInputs } from '@/hooks/useInputs.js';
import HeaderLogo from '@/layouts/HeaderLogo';
import { userState } from '@/recoil/atoms/userState';
import { theme } from '@/styles/theme';
import { saveItem } from '@/utils/localstorage.js';
import * as S from './Login.styles';

const Login = () => {
  // recoil 선언
  const setUser = useSetRecoilState(userState);

  // TODO: 실제 서비스할 때는 제거! (매번 입력하기 싫어서 입력)
  // 초기값 빈 string으로 변경했습니다. -> 동영
  const { value: loginForm, onChange } = useInputs({
    email: '',
    password: '',
  });
  // 지우
  const [isValid, setIsValid] = useState({
    isEmail: false,
    isPassword: false,
  });

  const validTest = useCallback(
    (name, value) => {
      setIsValid({ ...isValid, [name]: value });
    },
    [isValid],
  );

  const disabledTrue = isValid.isEmail && isValid.isPassword;

  const linkToKakaoLogin = (e) => {
    e.preventDefault();
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=39e024cd16a47a29d9162ee86e85b69a&redirect_uri=https://super-boarding.netlify.app/auth/kakao&response_type=code`;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginForm.email.trim() === '' || loginForm.password.trim() === '') return;

    login({
      email: loginForm.email,
      password: loginForm.password,
    }).then((result) => {
      // TODO: 로그인 성공 후 localstorage 에 값가져오기 및 전역 상태로 상태 추가
      console.log(result);
      if (result.status === 200) {
        // recoil 사용
        setUser({
          email: result.data.email,
          role: result.data.role,
          profileUrl: result.data.profileUrl,
        });
        saveItem(localstorageKey.auth, result.data.token);
        // TODO: user 를 전역 상태로 관리하면 해당 부분 삭제
        // user 전역 상태 관리 추가로 주석처리했습니다. 확인 후 삭제 예정 -> 동영
        // saveItem(localstorageKey.user, result.data);

        location.href = '/';
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
          validTest={validTest}
          isValid={isValid}
        />
        <UserInput
          type="password"
          required
          placeholder="password"
          name="password"
          value={loginForm.password}
          onChange={onChange}
          validTest={validTest}
          isValid={isValid}
        />
        <S.LoginButton
          bgColor={disabledTrue ? `${theme.color.black}` : `${theme.color.gray}`}
          fontColor="white"
          borderRadius="10px"
          text="로그인"
          disabled={!disabledTrue}
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
