/** @jsxImportSource @emotion/react */
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

import * as icon from '@/assets';

const DEFAULT_SIZE = 24;

/**
 * @desc 범용적으로 사요할 수 있는 Icon 입니다
 * @example
 * <Icon name="IconTest" size={50} onClick={() => alert('아이콘 클릭')} />
 */
export const Icon = ({
  name,
  size = DEFAULT_SIZE,
  width,
  height,
  color = '#595959',
  fill,
  style,
  ...rest
}) => {
  const SVGIcon = icon[name];

  const IconStyles = css`
    &,
    path {
      ${color ? `stroke: ${color} !important;` : ''}
      ${fill ? `fill: ${color} !important;` : ''}
      width: ${width ?? `${size}px`};
      height: ${height ?? `${size}px`};
    }
    circle {
      ${color ? `stroke: ${color} !important;` : ''}
      ${fill ? `fill: ${color} !important;` : ''}
    }
    cursor: pointer;
  `;

  return <SVGIcon {...rest} css={IconStyles} style={style} />;
};

// 타입스크립트 안되어서 자동 완성을 위한 해당 기능 추가
Icon.propTypes = {
  name: PropTypes.oneOf([
    'IconBasket', //
    'IconSearch',
    'IconUser',
    'IconProfile',
    'IconWrite',
    'IconPencil',
    'IconCheck',
    'IconX',
    'mainLogo',
  ]).isRequired,
  size: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  fill: PropTypes.string,
};
