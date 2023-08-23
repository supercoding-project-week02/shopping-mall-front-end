import { useEffect, useState } from 'react';

import { Container, IsFalse, IsTrue } from './ValidTest.styles';

export default function ValidTest({ name, value, password, validTest, isValid }) {
  const [isEmpty, setIsEmpty] = useState(true);

  // input값이 비어있는지 아닌지를 판단
  useEffect(() => {
    const emptyDelay = setTimeout(() => {
      if (value === '') {
        setIsEmpty(true);
      } else {
        setIsEmpty(false);
      }
    }, 500);

    return () => {
      clearTimeout(emptyDelay);
    };
  }, [value]);

  // 유효성 검사를 통한 문구 출력
  useEffect(() => {
    const valid = setTimeout(() => {
      // email 유효성 검사
      if (name === 'email') {
        const emailRegex = /[a-zA-Z0-9._+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.]+/;
        emailRegex.test(value) ? validTest('isEmail', true) : validTest('isEmail', false);
        return;
      }

      // password 유효성 검사
      // 현재 vaalidTest가 제대로 작동하지 않는 버그 있음
      // TODO: 로직 수정 후 return 부분 주석처리 해제
      if (name === 'password') {
        const passwordRegex =
          /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?:[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{8,20}$/;
        // 입력한 password가 정규식에 만족하는지 확인
        passwordRegex.test(value) ? validTest('isPassword', true) : validTest('isPassword', false);
        return;
      }

      // password 비교
      if (name === 'checkPassword' && !(password === '')) {
        value === password
          ? validTest('isPasswordConfirm', true)
          : validTest('isPasswordConfirm', false);
        return;
      }

      if (name === 'nickName') {
        value.trim() !== '' ? validTest('isNickName', true) : validTest('isNickName', false);
      }

      // 전화번호 체크
      if (name === 'phoneNumber') {
        const phoneNumberRegex = /^[0-9]{3}-[0-9]{4}-[0-9]{4}$/;
        phoneNumberRegex.test(value)
          ? validTest('isPhoneNumber', true)
          : validTest('isPhoneNumber', false);
      }

      return;
    }, 300);
    return () => {
      clearTimeout(valid);
    };
  }, [name, value, password]);

  return (
    <Container>
      {/* 삼항연산자를 사용했는데 다른 방법이 있는지 찾와봐야할듯 */}
      {/* email 부분 */}
      {name === 'email' ? (
        !isEmpty ? (
          isValid.isEmail ? (
            <IsTrue>유효한 이메일입니다.</IsTrue>
          ) : (
            <IsFalse>유효하지 않은 이메일입니다.</IsFalse>
          )
        ) : null
      ) : null}
      {/* password부분 */}
      {/* {name === 'password' ? (
        !isEmpty ? (
          isValid.isPassword ? (
            <IsTrue>유효한 비밀번호입니다.</IsTrue>
          ) : (
            <IsFalse>유효하지 않은 비밀번호입니다.</IsFalse>
          )
        ) : null
      ) : null} */}
      {/* password 비교 부분 */}
      {name === 'checkPassword' ? (
        !isEmpty ? (
          isValid.isPasswordConfirm ? (
            <IsTrue>비밀번호가 일치합니다.</IsTrue>
          ) : (
            <IsFalse>비밀번호가 일치하지 않습니다.</IsFalse>
          )
        ) : null
      ) : null}
      {/* nickname 비교 부분 */}
      {name === 'nickName' ? (
        !isEmpty ? (
          isValid.isNickName ? (
            <IsTrue>유효한 이름입니다.</IsTrue>
          ) : (
            <IsFalse>이름을 입력해주세요.</IsFalse>
          )
        ) : null
      ) : null}
      {/* password 비교 부분 */}
      {name === 'phoneNumber' ? (
        !isEmpty ? (
          isValid.isPhoneNumber ? (
            <IsTrue>유효한 전화번호입니다.</IsTrue>
          ) : (
            <IsFalse>유효하지 않은 전화번호입니다.</IsFalse>
          )
        ) : null
      ) : null}
    </Container>
  );
}
