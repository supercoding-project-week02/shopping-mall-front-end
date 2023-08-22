import * as S from './LoadingSpinner.styles';

/**
 * @desc 로딩 UI 를 나타내는 로딩 스피너
 * @param color
 * @param size
 * @param weight
 * @param type
 * @param isFullWidth
 * @example
 * <LoadingSpinner isFullWidth /> // 전체 영역
 */
export function LoadingSpinner({
  color = '#FEAF04',
  size = 25,
  weight = 2,
  type = 'dark',
  isFullWidth = false,
}) {
  const spinnerType =
    type === 'dark' //
      ? 'gray'
      : type === 'light'
      ? '#cbcbcb'
      : 'transparent';

  return (
    <S.LoadingSpinnerWrapper isFullWidth={isFullWidth}>
      <S.Spinner
        role="progressbar" //
        $size={size}
        $color={color}
        style={{
          '--loading-spinner-weight': `${weight}px`, //
          '--loading-spinner-border-color': spinnerType,
        }}
      />
    </S.LoadingSpinnerWrapper>
  );
}
