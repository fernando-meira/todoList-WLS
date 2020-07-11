import styled, { keyframes } from 'styled-components';
import media from 'styled-media-query';

import { pxToRem } from '../../functions';
import { colors } from '../../themes';

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  width: 90%;
  min-width: ${pxToRem(500)};
  margin-top: ${pxToRem(16)};

  display: flex;
  flex: 1;

  ${media.lessThan('small')`
    width: 99%;
    min-width: ${pxToRem(100)};
  `}
`;

export const List = styled.ul`
  width: 100%;
  height: 90%;
  margin: ${pxToRem(32)} 0;
  border-radius: 12px;

  background: ${colors.lightRed};

  ${media.lessThan('small')`
    background: ${colors.transparent};
  `}
`;

export const ListItem = styled.li`
  position: relative;

  max-width: 100%;
  margin: ${pxToRem(8)};
  padding: ${pxToRem(16)};
  border-radius: 12px;
  border: 1px solid ${colors.lightRed};

  list-style: none;
  transition: transform 0.4s;
  background: ${colors.white};
  animation: ${appearFromRight} 1s;

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

    ${media.lessThan('small')`
      width: 80%;

      font-size: 1.1rem;
      font-weight: 700;
      white-space: pre-line;
    `}
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
      color: ${colors.lightRed};
    }

    svg + button {
      margin-left: ${pxToRem(6)};
    }
  }
`;
