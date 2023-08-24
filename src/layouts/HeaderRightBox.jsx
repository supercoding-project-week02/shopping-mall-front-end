import { Link } from 'react-router-dom';
import { useRecoilState, useResetRecoilState } from 'recoil';

import { Icon } from '@/components/common/Icon/Icon.jsx';
import { localstorageKey } from '@/constant/index.js';
import { customerState, loginState, userState } from '@/recoil/atoms/userState.js';
import { removeItem } from '@/utils/localstorage.js';
import * as S from './Header.Styles.jsx';
import SearchBar from './SearchBar.jsx';

const HeaderRightBox = () => {
  // recoil의 상태 정보 불러오기
  // const getUser = useRecoilValue(userState);
  const resetUser = useResetRecoilState(userState);
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const [isCustomer, setIsCustomer] = useRecoilState(customerState);

  const handleLogout = () => {
    removeItem(localstorageKey.auth);
    resetUser();
    alert('로그아웃 되었습니다.');
  };

  return (
    <S.HeaderRightBox>
      <S.HeaderBtnsBox>
        <SearchBar />
        <Link to={isLogin ? '/mypage' : '/login'}>
          <S.MyInfoBtnBox>
            <Icon name="IconUser" width="25px" />
          </S.MyInfoBtnBox>
        </Link>
        {isLogin && (
          <Link to="/cart">
            <S.CartBtnBox>
              <Icon name="IconBasket" width="25px" />
            </S.CartBtnBox>
          </Link>
        )}
        {!isCustomer && isLogin && (
          <Link to="/write">
            <S.ProductAddBtnBox>
              <Icon name="IconWrite" width="25px" />
            </S.ProductAddBtnBox>
          </Link>
        )}
        {isLogin && <S.LogoutBtn onClick={handleLogout}>logout</S.LogoutBtn>}
      </S.HeaderBtnsBox>
    </S.HeaderRightBox>
  );
};

export default HeaderRightBox;
