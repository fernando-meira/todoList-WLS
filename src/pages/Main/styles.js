import styled from 'styled-components';
import { Form } from '@unform/web';
import media from 'styled-media-query';

import { pxToRem } from '../../functions';
import { colors } from '../../themes';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: flex-start;

  > div {
    height: 100%;

    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const FormContent = styled.div`
  max-height: 30%;
  margin-top: ${pxToRem(32)};

  display: flex;
  align-items: center;
  flex-direction: column;

  > h1 {
    display: flex;
    align-items: center;

    font-weight: 500;
    color: ${colors.black};

    & svg {
      margin-right: ${pxToRem(8)};
    }
  }

  ${media.lessThan('small')`
    margin-top: 3rem;

    > h1 {
      font-weight: 700;
      color: ${colors.black};
      font-size: ${pxToRem(24)};
      text-transform: uppercase;
    }
  `}
`;

export const FormComponent = styled(Form)`
  min-width: 500px;
  margin-top: ${pxToRem(32)};

  display: flex;
  flex-direction: column;

  > span {
    height: ${pxToRem(32)};
    margin-top: ${pxToRem(10)};

    display: flex;
    align-items: center;
    flex-direction: row;

    ${media.between('small', 'large')`
    justify-content: flex-end;
  `}
  }

  input + input {
    margin-top: ${pxToRem(10)};
  }

  ${media.lessThan('small')`
    max-width: 90%;
    min-width: 300px;
  `}
`;
