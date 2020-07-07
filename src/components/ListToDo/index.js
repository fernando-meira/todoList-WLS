import React from 'react';
import PropTypes from 'prop-types';
import { FaCheckCircle } from 'react-icons/fa';

import { colors } from '../../themes';
import { Container } from './styles';

export default function ListToDo({ data }) {
  const tasks = data;

  return (
    <Container>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <strong>{task?.titulo}</strong>

            <p>{task?.descricao}</p>

            <span>
              {task.concluido > 0 && (
                <FaCheckCircle size={20} color={colors.purple} />
              )}
            </span>
          </li>
        ))}
      </ul>
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
