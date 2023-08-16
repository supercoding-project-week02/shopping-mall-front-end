import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import HeaderLogo from './HeaderLogo.jsx';
import HeaderRightBox from './HeaderRightBox.jsx';
import * as S from './Styles.js';

const MainHeader = () => {
  let location = useLocation();

  const isLoginOrJoin = location.pathname === 'login' || location.pathname === 'join';

  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 1) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <S.HeaderWrapper isFixed={isHeaderFixed}>
      <S.HeaderContainer>
        <HeaderLogo />
        {isLoginOrJoin ? null : <HeaderRightBox />}
      </S.HeaderContainer>
    </S.HeaderWrapper>
  );
};

export default MainHeader;
