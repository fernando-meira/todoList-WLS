import styled from 'styled-components';

import { colors } from '../../themes';

export const Container = styled.div`
  position: relative;

  height: 20px;
  margin: 0 16px;

  span {
    right: 100%;
    position: absolute;
    bottom: calc(100% + 10px);
    transform: translateX(16%);

    width: 180px;
    padding: 6px;
    border-radius: 4px;

    opacity: 0;
    color: #fff;
    font-size: 14px;
    visibility: hidden;
    transition: opacity 0.4s;
    background: ${colors.lightRed};

    &::before {
      left: 86%;
      top: 100%;
      content: '';
      position: absolute;

      border-style: solid;
      border-width: 6px 6px 0 6px;
      border-color: ${colors.lightRed} transparent;
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }

  svg {
    margin: 0;
  }
`;
