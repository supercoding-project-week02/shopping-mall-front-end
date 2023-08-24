import * as S from './SkeletonComponent.styles.jsx';

const SkeletonComponent = () => {
  return (
    <S.SkeletonComponent>
      <S.SkeletonImg></S.SkeletonImg>
      <S.SkeletonText></S.SkeletonText>
      <S.SkeletonText></S.SkeletonText>
      <S.SkeletonText></S.SkeletonText>
    </S.SkeletonComponent>
  );
};

export default SkeletonComponent;
