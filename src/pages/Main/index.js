import React from 'react';
import { RiTodoLine } from 'react-icons/ri';
import { FaPlus } from 'react-icons/fa';

import { ImageComponent, InfoHeader } from '../../components';

import { Container, Content, Form, SubmitButton, FormContent } from './styles';

function Main() {
  return (
    <>
      <Container>
        <InfoHeader />

        <Content>
          <ImageComponent />

          <FormContent>
            <h1>
              <RiTodoLine />
              ToDo List JWL
            </h1>

            <Form onSubmit-={() => {}}>
              <input type="text" placeholder="Adicionar uma tarefa" />

              <SubmitButton>
                <FaPlus size={20} color="#5E68C3" />
              </SubmitButton>
            </Form>
          </FormContent>
        </Content>
      </Container>
    </>
  );
}

export default Main;
