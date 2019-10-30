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

const AnimationTopDown = keyframes`
from{
  opacity:0;
  transform:translateY(-20%)
}
to{
  opacity:1;
  transform:translateY(0%)
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

export const AnimationTopToDown = styled.div`
  opacity: 0;
  animation: ${AnimationTopDown}
    ${({ time, easing }) => `${time}s ${easing || ''} `};
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
