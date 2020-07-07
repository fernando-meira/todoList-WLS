import styled from 'styled-components';

import { pxToRem } from '../../functions';
import { colors } from '../../themes';

export const Container = styled.div`
  margin-top: 2rem;
  min-width: ${pxToRem(500)};

  display: flex;
  flex: 1;

  ul {
    width: 90%;

    li {
      position: relative;

      margin: 8px;
      padding: 1rem;
      border-radius: 4px;
      border: 1px solid ${colors.purple};

      list-style: none;
      background: #fff;
      transition: transform 0.4s;

      :hover {
        transform: translateX(1rem);
      }

      > strong {
        font-size: 1.5rem;
        text-transform: uppercase;
      }

      > p {
        font-size: ${pxToRem(14)};
      }

      > span {
        position: absolute;
        top: ${pxToRem(16)};
        right: ${pxToRem(16)};
      }
    }
  }
`;
