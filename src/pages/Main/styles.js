import styled from 'styled-components';

import { pxToRem } from '../../functions';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const FormContent = styled.div`
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

export const Form = styled.form`
  min-width: 500px;

  margin-top: ${pxToRem(32)};
  display: flex;
  flex-direction: row;

  & input {
    padding: 8px 12px;
    border-radius: 4px;
    border: 1px solid #eee;

    flex: 1;

    font-size: 16px;
  }
`;

export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  border: 0;
  padding: 0 10px;
  margin-left: ${pxToRem(8)};
  border-radius: ${pxToRem(4)};

  display: flex;
  align-items: center;
  justify-content: center;

  background: #5e68c3;
`;
