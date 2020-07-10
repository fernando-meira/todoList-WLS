import styled from 'styled-components';

import { pxToRem } from '../../functions';
import { colors } from '../../themes';

export const Container = styled.div`
  width: 90%;
  /* height: 742px; */
  min-width: ${pxToRem(500)};

  display: flex;
  flex: 1;
`;

export const List = styled.ul`
  width: 100%;
  height: 90%;
  margin: ${pxToRem(12)};
  border-radius: ${pxToRem(12)};

  background: ${colors.lightPurple};
`;

export const ListItem = styled.li`
  max-width: 100%;

  position: relative;

  margin: 8px;
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid ${colors.purple};

  list-style: none;
  background: #fff;
  transition: transform 0.4s;

  :hover {
    transform: scale(0.98);
  }

  > strong {
    font-size: 1.5rem;
    text-transform: initial;
  }

  > p {
    font-size: ${pxToRem(14)};
  }

  > span {
    position: absolute;
    top: ${pxToRem(16)};
    right: ${pxToRem(16)};

    > button {
      border: none;

      background: none;
      color: ${colors.purple};
    }

    svg + button {
      margin-left: ${pxToRem(6)};
    }
  }
`;
