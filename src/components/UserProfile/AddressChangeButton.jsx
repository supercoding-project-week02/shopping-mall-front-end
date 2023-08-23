import { useDaumPostcodePopup } from 'react-daum-postcode';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { changeAddress } from '@/apis/user.js';
import { QUERY_KEYS } from '@/queries/queryKeys.js';
import * as S from './UserProfile.styles.jsx';

function AddressChangeButton({ children, address }) {
  //클릭 시 수행될 팝업 생성 함수
  const open = useDaumPostcodePopup();
  const { mutate: changeAddressMutate } = useMutation((payload) => changeAddress(payload));
  const queryClient = useQueryClient();

  const handleComplete = (data) => {
    const newAddress = {
      ...address,
      addressDetail: '여기빌라 2동 102호',
      address: data.address,
      zipCode: data.zonecode,
    };

    // 배송지 업데이트 처리
    changeAddressMutate(newAddress, {
      onSuccess: async () => {
        await queryClient.invalidateQueries([QUERY_KEYS.profile]);
      },
    });
  };

  //클릭 시 발생할 이벤트
  const handleClick = () => {
    //주소검색이 완료되고, 결과 주소를 클릭 시 해당 함수 수행
    open({ onComplete: handleComplete });
  };
  return (
    <S.Button type="button" onClick={handleClick}>
      {children}
    </S.Button>
  );
}

export default AddressChangeButton;
