import { Link } from 'react-router-dom';

import * as S from './Header.Styles.jsx';

const HeaderLogo = () => {
  return (
    <Link to="/">
      <S.HeaderLogoBox>로고</S.HeaderLogoBox>;
    </Link>
  );
};

export default HeaderLogo;
