import React from 'react';
import PropTypes from 'prop-types';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

import { useTasks } from '../../hooks/tasks';

import { StyledCustomScrollBar } from '../';

import { colors } from '../../themes';
import { Container, List, ListItem } from './styles';

export default function ListToDo({ data }) {
  const { removeTask } = useTasks();

  return (
    <Container>
      <List>
        <StyledCustomScrollBar>
          {data.map((task) => (
            <ListItem key={task.id}>
              <p className="title">{task?.titulo}</p>

              <p>{task?.descricao}</p>

              <span>
                {task.concluido > 0 && (
                  <FaCheckCircle size={20} color={colors.purple} />
                )}

                <button type="button" onClick={() => removeTask(task.id)}>
                  <FaTimesCircle size={20} />
                </button>
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
      id: PropTypes.number || PropTypes.string,
      titulo: PropTypes.string,
      descricao: PropTypes.string,
      concluido: PropTypes.number,
    })
  ).isRequired,
};
