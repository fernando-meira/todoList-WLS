import styled from 'styled-components';

import { colors } from '../../themes';

export const Container = styled.input`
  width: 100%;

  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid ${colors.lightGray};

  flex: 1;

  font-size: 16px;
`;
