import { Link } from 'react-router-dom';

import mainLogo from '@/assets/superBoardingLogo.svg';
import * as S from './Header.Styles.jsx';

const HeaderLogo = () => {
  return (
    <Link to="/">
      <S.HeaderLogoBox>
        <S.mainLogo src={mainLogo}></S.mainLogo>
      </S.HeaderLogoBox>
    </Link>
  );
};

export default HeaderLogo;
