import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 460px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  background: url("${({ img }) => img}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition:.1s;
`;

export const Content = styled.article`
  width: 500px;
  height: 100%;
  color: white;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  padding: 0px 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Area = styled.div`
  font-size: 1.3em;
  color: white;
  font-weight: 100;
  position: relative;
  width: fit-content;
  margin-bottom: 15px;
  &::after {
    content: '';
    position: absolute;
    background: white;
    height: 1px;
    width: 120%;
    bottom: -10px;
    left: 0;
  }
`;

export const Title = styled.div`
  font-size: 2em;
  font-weight: 600;
`;

export const Description = styled.div`
  font-size: 1.4em;
  margin-top: 15px;
`;

export const Buttons = styled.div`
  text-align: right;
  width: 100%;
  margin-top: 20px;
  
`;

export const Button = styled.div`
  font-size: 1.2em;
  display: inline-block;
  padding: 5px 65px;
  border-radius: 4px;
  cursor: pointer;
  border: solid white 1px;
  transition: 0.1s;
  letter-spacing: 2px;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;
