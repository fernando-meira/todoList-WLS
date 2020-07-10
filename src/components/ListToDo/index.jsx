import React from 'react';
import PropTypes from 'prop-types';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

import { StyledCustomScrollBar } from '../';

import { colors } from '../../themes';
import { Container, List, ListItem } from './styles';

export default function ListToDo({ data }) {
  const tasks = data;

  // const removeTask = (id) => {
  //   setTasks((state) => state.filter((task) => task.id !== id));
  // };

  return (
    <Container>
      <List>
        <StyledCustomScrollBar>
          {tasks.map((task) => (
            <ListItem key={task.id}>
              <strong>{task?.titulo}</strong>

              <p>{task?.descricao}</p>

              <span>
                <button type="button">
                  <FaTimesCircle size={20} />
                </button>
                {task.concluido > 0 && (
                  <FaCheckCircle size={20} color={colors.purple} />
                )}
              </span>
            </ListItem>
          ))}
        </StyledCustomScrollBar>
      </List>
    </Container>
  );
}

ListToDo.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      titulo: PropTypes.string,
      descricao: PropTypes.string,
      concluido: PropTypes.number,
    })
  ).isRequired,
};
