import HeaderLogo from './HeaderLogo.jsx';
import HeaderRightBox from './HeaderRightBox.jsx';
import * as S from './Styles.js';

const MainHeader = () => {
  let isLogin = true;

  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <HeaderLogo />
        {isLogin && <HeaderRightBox />}
      </S.HeaderContainer>
    </S.HeaderWrapper>
  );
};

export default MainHeader;
