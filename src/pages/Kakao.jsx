import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import styled from '@emotion/styled';

import { kakaoLogin } from '@/apis/user';
import { LoadingSpinner } from '@/components/common/LoadingSpinner/LoadingSpinner';
import { localstorageKey } from '@/constant';
import { userState } from '@/recoil/atoms/userState';
import { saveItem } from '@/utils/localstorage';

const Kakao = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const setUser = useSetRecoilState(userState);
  const code = searchParams.get('code');

  kakaoLogin({
    code: code,
  }).then((result) => {
    console.log(result);
    if (result.status === 200) {
      setUser({
        email: result.data.email,
        role: result.data.role,
        profileUrl: result.data.profileUrl,
      });
      saveItem(localstorageKey.auth, result.data.token);

      alert('카카오로 로그인 되었습니다.');
      navigate('/');
    }
  });
  return (
    <KakoContainer>
      <LoadingSpinner isFullWidth size={50} />
    </KakoContainer>
  );
};

export default Kakao;

const KakoContainer = styled.div`
  width: 100%;
  height: 300px;
`;
