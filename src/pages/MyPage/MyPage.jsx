import UserProfile from '@/components/UserProfile/UserProfile.jsx';
import * as S from './MyPage.styles.jsx';
import { MenusWrapper } from './MyPage.styles.jsx';

const MyPage = () => {
  return (
    <S.MyPageWrapper>
      <MenusWrapper />
      <UserProfile />
    </S.MyPageWrapper>
  );
};

export default MyPage;
