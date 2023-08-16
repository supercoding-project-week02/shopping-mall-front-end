import * as S from './Styles.js';

const HeaderLogo = () => {
  return <S.HeaderLogoBox onClick={() => (window.location.href = '/')}>로고</S.HeaderLogoBox>;
};

export default HeaderLogo;
