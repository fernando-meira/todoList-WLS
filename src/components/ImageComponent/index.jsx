import React from 'react';

import sideImage from '../../themes/assets/images/BackgroundMobile.svg';

import { Container } from './styles';

export default function ImageComponent() {
  return (
    <Container>
      <img src={sideImage} alt="Side" />
    </Container>
  );
}
