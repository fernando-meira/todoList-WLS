import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { colors } from '../../themes';
import { pxToRem } from '../../functions';

export const Container = styled.input`
  width: 100%;

  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid ${colors.lightGray};

  font-size: 16px;

  ${media.lessThan('small')`
    border: 1px solid ${colors.lightRed};
  `}

  ${(props) =>
    props.type === 'checkbox' &&
    css`
      width: 40px;
      height: 100%;
      padding: 8px 12px;
      border-radius: ${pxToRem(4)};
      border: 1px solid ${colors.lightRed};

      display: flex;
      align-items: center;
      justify-content: center;

      appearance: none;
      background: ${colors.white};

      :checked {
        border: 1px solid ${colors.lightRed};

        color: ${colors.white};
        background-color: ${colors.lightRed};
      }
      :after {
        content: '';

        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;

        transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
      }
    `}
`;
