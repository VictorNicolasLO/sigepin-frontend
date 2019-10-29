import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 60px;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 0;
  & > div {
    padding: 0 10px;
    cursor: pointer;
  }
  & > div > div {
    transition: 0.1s;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);

    width: 20px;
    height: 20px;
  }
  & > div > div:hover {
    background: rgba(255, 255, 255, 1);
  }
`;
