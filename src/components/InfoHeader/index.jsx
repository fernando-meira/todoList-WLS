import React from 'react';

import { Container } from './styles';

export default function InfoHeader() {
  return (
    <Container>
      <p>
        Teste desenvolvido por{' '}
        <a href="https://fernando-meira.netlify.app/">Fernando Meira</a> para
        <a href="https://www.facebook.com/wlssolucoes"> WLS Soluções</a>.
      </p>
    </Container>
  );
}
