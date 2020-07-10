import styled from 'styled-components';

import { pxToRem } from '../../functions';
import { colors } from '../../themes';

export const Container = styled.button.attrs({
  type: 'submit',
})`
  border: 0;
  padding: 8px 12px;
  margin-left: ${pxToRem(8)};
  border-radius: ${pxToRem(4)};

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${colors.lightRed};
`;
