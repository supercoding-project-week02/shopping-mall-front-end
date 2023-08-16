import { useLocation } from 'react-router-dom';

import HeaderLogo from './HeaderLogo.jsx';
import HeaderRightBox from './HeaderRightBox.jsx';
import * as S from './Header.Styles.jsx';

const MainHeader = () => {
  let location = useLocation();

  const isLoginOrJoin = location.pathname === 'login' || location.pathname === 'join';

  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <HeaderLogo />
        {isLoginOrJoin ? null : <HeaderRightBox />}
      </S.HeaderContainer>
    </S.HeaderWrapper>
  );
};

export default MainHeader;
