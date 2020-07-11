import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Tooltip({ title, children, className }) {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
}

Tooltip.defaultProps = {
  title: 'Error',
};

Tooltip.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};
