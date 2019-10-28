import React from 'react';
import { Container } from './styled';

function DemoComponent({ greeting }) {
  return (
    <Container>
      Hi I am a demo component and you say <br />"{greeting}""
    </Container>
  );
}

export default DemoComponent;
