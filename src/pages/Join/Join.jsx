import axios from 'axios';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@/components/common/Button/Button';
import UserInput from '@/components/common/UserInput/UserInput';
import RadioInput from '@/components/RadioInput/RadioInput';
import ImgInput from '@/components/write/PreviewImgItem/ImgInput';
import { useInputs } from '@/hooks/useInputs';
import { theme } from '@/styles/theme';
import * as S from './Join.styles';

const Join = () => {
  const navigate = useNavigate();
  const { value: joinForm, onChange } = useInputs({
    email: '',
    password: '',
    checkPassword: '',
    nickName: '',
    phoneNumber: '',
    type: 'CONSUMER',
  });
  const targetPassword = joinForm.password;

  const [imgValue, setImgValue] = useState(null);

  const [isValid, setIsValid] = useState({
    isEmail: false,
    isPassword: false,
    isPasswordConfirm: false,
    isNickName: false,
    isPhoneNumber: false,
  });

  const checkBtn = (
    <S.CheckBtn
      disabled={!isValid.isEmail}
      onClick={(e) => {
        e.preventDefault();
        console.log('click');
      }}
    >
      중복확인
    </S.CheckBtn>
  );

  const validTest = useCallback(
    (name, value) => {
      setIsValid({ ...isValid, [name]: value });
    },
    [isValid],
  );

  const disabledTrue =
    isValid.isEmail &&
    isValid.isPassword &&
    isValid.isPasswordConfirm &&
    isValid.isNickName &&
    isValid.isPhoneNumber;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://52.79.168.48:8080/api/v1/user/signup',
        {
          email: joinForm.email,
          password: joinForm.password,
          nickname: joinForm.nickName,
          phoneNumber: joinForm.phoneNumber,
          type: joinForm.type,
          profileImage: imgValue,
        },
        {
          headers: { 'Content-Type': `multipart/form-data` },
        },
      );

      if (response.data.status === 409) {
        alert('이메일이 중복되었습니다.');
      }

      if (response.data.status === 200) {
        alert('회원가입이 완료되었습니다.');
        navigate('/login');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit}>
        <ImgInput label="프로필 사진 추가" name="profileImage" value="" setImgValue={setImgValue} />
        <UserInput
          button={checkBtn}
          placeholder="이메일"
          type="email"
          onChange={onChange}
          name="email"
          value={joinForm.email}
          validTest={validTest}
          isValid={isValid}
        />
        <UserInput
          placeholder="비밀번호"
          type="password"
          onChange={onChange}
          name="password"
          value={joinForm.password}
          validTest={validTest}
          isValid={isValid}
        />
        <UserInput
          placeholder="비밀번호 확인"
          type="password"
          onChange={onChange}
          name="checkPassword"
          value={joinForm.checkPassword}
          validTest={validTest}
          isValid={isValid}
          password={targetPassword}
        />
        <S.Label>이름(필수)</S.Label>
        <UserInput
          placeholder="이름을 입력하세요"
          type="text"
          onChange={onChange}
          name="nickName"
          value={joinForm.nickName}
          validTest={validTest}
          isValid={isValid}
        />
        <S.Label>연락처</S.Label>
        <UserInput
          placeholder="연락처"
          type="text"
          onChange={onChange}
          name="phoneNumber"
          value={joinForm.phoneNumber}
          validTest={validTest}
          isValid={isValid}
        />
        <S.RadioBox>
          <RadioInput
            id="buyer"
            name="type"
            value="CONSUMER"
            checked={joinForm.type === 'CONSUMER'}
            label="구매자"
            onChange={onChange}
          />
          <RadioInput
            id="seller"
            name="type"
            value="SELLER"
            label="판매자"
            checked={joinForm.type === 'SELLER'}
            onChange={onChange}
          />
        </S.RadioBox>
        <Button
          bgColor={theme.color.black}
          fontColor="white"
          borderRadius="10px"
          text="가입하기"
          disabled={!disabledTrue}
        />
      </S.Form>
    </S.Container>
  );
};

export default Join;
