import React from 'react';
import { Container } from './styled';

function Controls({ items, onSelectItem, currentItemIndex }) {
  return (
    <Container>
      {items.map((_, index) => (
        <div
          onClick={() => {
            onSelectItem(index);
          }}>
          <div
            style={{
              background: currentItemIndex === index ? 'white' : undefined,
              cursor: 'pointer !important',
            }}
          />
        </div>
      ))}
    </Container>
  );
}

export default Controls;
