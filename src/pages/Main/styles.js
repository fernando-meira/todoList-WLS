import styled from 'styled-components';
import { Form } from '@unform/web';

import { pxToRem } from '../../functions';

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

  & div {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const FormContent = styled.div`
  margin-top: 10%;

  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;

  > h1 {
    display: flex;
    align-items: center;

    font-weight: 500;

    & svg {
      margin-right: ${pxToRem(8)};
    }
  }
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
  }

  input + input {
    margin-top: ${pxToRem(10)};
  }
`;
