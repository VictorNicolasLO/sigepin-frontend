import styled, { keyframes } from 'styled-components';

const displayAnim = keyframes`
    from{
        opacity:0;

        transform:scaleY(.5) translateY(-50%); 
        
    }
    to{
        
        opacity:1;
        transform:scaleY(1)  translateY(0);
    }
`;

export const Container = styled.div`
  display: inline-block;
  background: white;
  box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.1);
  padding: 12px;
  border-radius: 4px;
  animation: ${displayAnim} 0.2s;
`;

export const Item = styled.div`
  display: block;
  background: white;
  cursor: pointer;
  border-radius: 4px;
  padding: 5px 10px;
  transition: 0.08s;
  user-select: none;
  display: flex;
  color: ${({ color }) => color};
  text-align: center;
  &:hover {
    background: rgba(0, 0, 0, 0.02);
  }
  &:active {
    background: rgba(0, 0, 0, 0.04);
  }
`;

export const IconContainer = styled.div`
  padding-right: 5px;
  display: flex;
  & > i {
    font-size: 1.2em;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
