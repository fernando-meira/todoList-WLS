import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import Tooltip from '../../components/Tooltip';

import { colors } from '../../themes';
import { pxToRem } from '../../functions';

export const Container = styled.div`
  border: 1px solid ${colors.lightGray};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  font-size: 16px;
  background: ${colors.white};

  & + div {
    margin-top: ${pxToRem(10)};
  }

  ${media.lessThan('small')`
    border: 1px solid ${colors.lightRed};
  `}

  ${(props) =>
    props.isErrored &&
    css`
      border: 1px solid ${colors.lightRed};
    `}
`;

export const InputComponent = styled.input`
    border: none;
    padding: 10px;

    display: flex;
    flex: 1;

    background: ${colors.transparent};
  }
  ${(props) =>
    props.type === 'checkbox' &&
    css`
      width: 40px;
      height: 32px;
      padding: 8px 12px;
      /* border: 1px solid ${colors.lightRed}; */

      flex: none;
      display: flex;
      align-items: center;
      justify-content: center;

      appearance: none;
      background: ${colors.transparent};

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
    `};
`;

export const Error = styled(Tooltip)`
  > svg {
    color: ${colors.lightRed};
    background: ${colors.transparent};
  }
`;
