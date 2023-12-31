import { useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { client } from '@/apis/index.js';
import { postEmailCheck, smsAuthCheck, smsCheck } from '@/apis/user';
import Button from '@/components/common/Button/Button';
import Modal from '@/components/common/Modal/Modal';
import ModalContent from '@/components/common/Modal/ModalContent';
import ModalHeader from '@/components/common/Modal/ModalHeader';
import UserInput from '@/components/common/UserInput/UserInput';
import RadioInput from '@/components/RadioInput/RadioInput';
import ImgInput from '@/components/write/PreviewImgItem/ImgInput';
import { useInputs } from '@/hooks/useInputs';
import { theme } from '@/styles/theme';
import * as S from './Join.styles';

const Join = () => {
  const inputRef = useRef();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { value: joinForm, onChange } = useInputs({
    email: '',
    password: '',
    checkPassword: '',
    nickName: '',
    phoneNumber: '',
    type: 'CONSUMER',
  });

  const [imgValue, setImgValue] = useState(null);

  const [isValid, setIsValid] = useState({
    isEmail: false,
    isPassword: false,
    isPasswordConfirm: false,
    isNickName: false,
    isPhoneNumber: false,
    isEmailChecked: false,
    isPhoneChecked: false,
  });

  const emailCheck = (e) => {
    e.preventDefault();
    postEmailCheck({
      email: joinForm.email,
    }).then((result) => {
      console.log(result);
      if (result.status === 409) {
        alert('이메일이 중복되었습니다.');
      }

      if (result.status === 200) {
        setIsValid({
          ...isValid,
          isEmailChecked: true,
        });
      }
    });
  };

  const phoneCheck = (e) => {
    e.preventDefault();
    smsCheck({
      phone: joinForm.phoneNumber,
    }).then((result) => {
      if (result.status === 200) {
        setIsModalOpen(true);
        console.log(result.data);
      }
    });
  };

  const checkBtn = (
    <S.CheckBtn
      disabled={!isValid.isEmail}
      onClick={emailCheck}
      checkSuccess={isValid.isEmailChecked}
    >
      {isValid.isEmailChecked ? 'v' : '중복확인'}
    </S.CheckBtn>
  );

  const phoneCheckBtn = (
    <S.CheckBtn
      disabled={!isValid.isPhoneNumber}
      onClick={phoneCheck}
      checkSuccess={isValid.isPhoneChecked}
    >
      {isValid.isPhoneChecked ? 'v' : '본인인증'}
    </S.CheckBtn>
  );

  const authPhoneCheck = () => {
    const code = inputRef.current.value;
    console.log(code);
    smsAuthCheck({
      authCode: code,
      phone: joinForm.phoneNumber,
    }).then((result) => {
      if (result.status === 200) {
        setIsValid({
          ...isValid,
          isPhoneChecked: true,
        });
        setIsModalOpen(false);
      }
    });
  };

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
    isValid.isPhoneNumber &&
    isValid.isEmailChecked &&
    isValid.isPhoneChecked;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await client.post(
        '/user/signup',
        {
          email: joinForm.email,
          password: joinForm.password,
          name: joinForm.nickName,
          phone: joinForm.phoneNumber,
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

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.Container>
      <Modal
        visible={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      >
        <ModalHeader />
        <ModalContent>
          <p>휴대폰 인증</p>
          <input type="number" ref={inputRef} />
          <button onClick={authPhoneCheck}>인증하기</button>
        </ModalContent>
      </Modal>
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
          password={joinForm.password}
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
        <S.Label>연락처(필수)</S.Label>
        <UserInput
          button={phoneCheckBtn}
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
          bgColor={disabledTrue ? `${theme.color.black}` : `${theme.color.gray}`}
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
