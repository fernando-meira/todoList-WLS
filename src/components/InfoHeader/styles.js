import styled from 'styled-components';
import media from 'styled-media-query';

import { pxToRem } from '../../functions';
import { colors } from '../../themes';

export const Container = styled.header`
  width: 100%;
  height: auto;
  padding: ${pxToRem(8)};

  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);

  > p {
    font-size: ${pxToRem(14)};

    > a {
      font-style: italic;
      text-decoration: none;
      color: ${colors.black};
    }
  }

  ${media.lessThan('small')`
    border-bottom-left-radius: ${pxToRem(8)};
    border-bottom-right-radius: ${pxToRem(8)};

    background: ${colors.lightRed};
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28);

    > p {
      font-size: ${pxToRem(10)};
      color: ${colors.white};

      > a {
        color: ${colors.white}
      }
    }
  `}
`;
