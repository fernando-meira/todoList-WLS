import React, { useState, useEffect } from 'react';
import { RiTodoLine } from 'react-icons/ri';
import { FaPlus } from 'react-icons/fa';

import { ImageComponent, InfoHeader } from '../../components';

import { Container, Content, Form, SubmitButton, FormContent } from './styles';

function Main() {
  const [newTaks, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();

    console.log(newTaks);
  }

  return (
    <>
      <Container>
        <InfoHeader />

        <Content>
          <ImageComponent />

          <FormContent>
            <h1>
              <RiTodoLine color="#5e68c3" />
              Lista de tarefas
            </h1>

            <Form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Adicionar uma tarefa"
                value={newTaks}
                onChange={handleInputChange}
              />

              <SubmitButton>
                <FaPlus size={20} color="#fff" />
              </SubmitButton>
            </Form>
          </FormContent>
        </Content>
      </Container>
    </>
  );
}

export default Main;
