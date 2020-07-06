import styled from 'styled-components';

import { pxToRem } from '../../functions';
import { colors } from '../../themes';

export const Container = styled.header`
  width: 100%;
  height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  > p {
    font-size: ${pxToRem(14)};

    > a {
      font-style: italic;
      text-decoration: none;
      color: ${colors.black};
    }
  }
`;
