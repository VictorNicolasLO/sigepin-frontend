import React, { useRef } from 'react';
import { Container, Item, IconContainer } from './styled';
import { AnimationTopToDown } from '../../animations';
import { useClickOutside } from '../../../hooks/useClickOutside';

function DropDownMenu({ items, open, onClose, anchor, onSelect, style }) {
  const containerRef = useRef();
  useClickOutside(
    containerRef,
    () => {
      onClose();
    },
    [anchor],
  );
  if (!open) return '';

  return (
    <Container
      style={{
        position: 'absolute',
        top: anchor.current ? anchor.current.offsetTop + 'px' : 0,
        left: anchor.current ? anchor.current.offsetLeft + 'px' : 0,
        ...(style || {}),
      }}
      ref={containerRef}>
      {items.map((item, index) => (
        <AnimationTopToDown
          time={0.4}
          delay={0.15 + index * 0.04}
          easing="cubic-bezier(0.075, 0.82, 0.165, 1)">
          <Item
            onClick={() => {
              onSelect(item);
              onClose();
            }}
            color={item.color ? item.color : 'default'}>
            {<IconContainer>{item.icon || ''} </IconContainer>}
            {item.name}
          </Item>
        </AnimationTopToDown>
      ))}
    </Container>
  );
}

export default DropDownMenu;
