import styled, { keyframes } from 'styled-components';

const animationShow = keyframes`
from{
  opacity:0;
  transform:translateY(20px)
}
to{
  opacity:1;
  transform:translateY(0px)
}
`;

const animationOpacity = keyframes`
from{
  opacity:0;


}
to{
  opacity:1;
}
`;

export const AnimationBottomToUp = styled.div`
  opacity: 0;
  animation: ${animationShow} ${({ time }) => time}s;
  animation-delay: ${({ delay }) => delay}s;
  animation-fill-mode: forwards;
`;

export const AnimationOpacity = styled.div`
  display: inline-block;
  opacity: 0;
  animation: ${animationOpacity} ${({ time }) => time}s;
  animation-delay: ${({ delay }) => delay}s;
  animation-fill-mode: forwards;
`;
