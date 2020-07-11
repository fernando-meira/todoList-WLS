import React, { useState, useCallback, useRef } from 'react';
import { FaListAlt } from 'react-icons/fa';
import { uuid } from 'uuidv4';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

import api from '../../services/api';
import { useTasks } from '../../hooks/tasks';
import { colors } from '../../themes';

import {
  Input,
  Button,
  ListToDo,
  InfoHeader,
  ImageComponent,
} from '../../components';

import { Container, Content, FormComponent, FormContent } from './styles';

function Main() {
  const formRef = useRef(null);
  const { tasks, setTasks } = useTasks();
  const [checked, setChecked] = useState(0);

  const toggleCheck = useCallback(() => {
    const checkedValue = checked;

    return checkedValue === 0 ? setChecked(1) : setChecked(0);
  }, [checked]);

  const handleSubmit = useCallback(
    async (data, { reset }) => {
      try {
        formRef.current.setErrors({});

        const schema = Yup.object().shape({
          titulo: Yup.string().required('Título obrigatório'),
          descricao: Yup.string().required('Descrição obrigatória'),
          concluido: Yup.number(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const newTaks = {
          ...data,
          id: uuid(),
        };

        setTasks([...tasks, newTaks]);

        reset();

        api.post('api/tarefas', data);
      } catch (error) {
        const errors = getValidationErrors(error);

        formRef.current.setErrors(errors);
      }
    },
    [tasks, setTasks]
  );

  return (
    <>
      <Container>
        <InfoHeader />

        <Content>
          <ImageComponent />

          <div>
            <FormContent>
              <h1>
                <FaListAlt color={colors.black} size={24} />
                Lista de tarefas
              </h1>
              <FormComponent ref={formRef} onSubmit={handleSubmit}>
                <Input
                  name="titulo"
                  type="text"
                  placeholder="Titulo da tarefa"
                />

                <Input
                  name="descricao"
                  type="text"
                  placeholder="Descrição da tarefa"
                  textarea
                  maxLength="190"
                />

                <span>
                  <Input
                    name="concluido"
                    type="checkbox"
                    value={checked}
                    onChange={toggleCheck}
                  />

                  <Button />
                </span>
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
