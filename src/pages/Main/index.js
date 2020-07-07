import React, { useState, useEffect } from 'react';
import { FaListAlt } from 'react-icons/fa';

import api from '../../services/api';

import {
  Input,
  Button,
  ListToDo,
  InfoHeader,
  ImageComponent,
} from '../../components';

import { Container, Content, FormComponent, FormContent } from './styles';

function Main() {
  const [tasks, setTasks] = useState([]);
  const [newTaks, setNewTask] = useState('');
  const [checked, setChecked] = useState(true);

  const toogleCheck = () => {
    setChecked(!checked);
    console.log('checked', checked);
  };

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get('api/tarefas');

      setTasks(data);
    }

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Container>
        <InfoHeader />

        <Content>
          <ImageComponent />

          <div>
            <FormContent>
              <h1>
                <FaListAlt color="#5e68c3" size={24} />
                Lista de tarefas
              </h1>
              <FormComponent onSubmit={handleSubmit}>
                <Input
                  name="title"
                  type="text"
                  placeholder="Titulo da tarefa"
                />

                <Input
                  name="description"
                  type="text"
                  placeholder="Descrição da tarefa"
                />

                <Input
                  name="check"
                  type="checkbox"
                  value={checked}
                  onChange={toogleCheck}
                />

                <Button />
              </FormComponent>
            </FormContent>

            <ListToDo data={tasks} />
          </div>
        </Content>
      </Container>
    </>
  );
}

export default Main;
