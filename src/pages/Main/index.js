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
  const [checked, setChecked] = useState(0);
  const [newTask, setNewTask] = useState({});

  console.log(newTask);

  const toogleCheck = () => {
    const checkedValue = checked;

    return checkedValue === 0 ? setChecked(1) : setChecked(0);
  };

  const handleSubmit = (data, { reset }) => {
    setNewTask(data);

    reset();
  };

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get('api/tarefas');

      setTasks(data);
    }

    fetchData();
  }, []);

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
                  name="titulo"
                  type="text"
                  placeholder="Titulo da tarefa"
                />

                <Input
                  name="descricao"
                  type="text"
                  placeholder="Descrição da tarefa"
                />

                <Input
                  name="concluido"
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
