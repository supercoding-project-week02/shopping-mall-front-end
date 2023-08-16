import { Link } from 'react-router-dom';

import * as S from './Styles.js';

const HeaderLogo = () => {
  return (
    <Link to="/">
      <S.HeaderLogoBox>로고</S.HeaderLogoBox>;
    </Link>
  );
};

export default HeaderLogo;
