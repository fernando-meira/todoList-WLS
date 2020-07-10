import styled from 'styled-components';
import media from 'styled-media-query';

import { pxToRem } from '../../functions';
import { colors } from '../../themes';

export const Container = styled.div`
  width: 90%;
  min-width: ${pxToRem(500)};

  display: flex;
  flex: 1;

  ${media.lessThan('small')`
    min-width: ${pxToRem(350)};
  `}
`;

export const List = styled.ul`
  width: 100%;
  height: 90%;
  margin: ${pxToRem(12)};
  border-radius: ${pxToRem(12)};

  background: ${colors.lightPurple};
`;

export const ListItem = styled.li`
  position: relative;

  max-width: 100%;
  margin: ${pxToRem(8)};
  padding: ${pxToRem(16)};
  border-radius: 12px;
  border: 1px solid ${colors.purple};

  list-style: none;
  transition: transform 0.4s;
  background: ${colors.white};

  :hover {
    transform: translateX(-4px);
  }

  > .title {
    font-size: 1.5rem;
    text-transform: initial;

    width: 90%;
    overflow: hidden;
    white-space: nowrap;

    text-overflow: ellipsis;
  }

  > p {
    font-size: ${pxToRem(14)};
    white-space: normal;
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
