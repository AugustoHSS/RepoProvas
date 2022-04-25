import styled from 'styled-components';
import { styled as muiStyled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const Container = styled.div`
    height: 100vh;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        top:0;
        size: auto;
        margin: 0 0 25px 15px;
    }
    h1{
        padding-top:8%;
        font-weight: 500;
        font-size: 24px;
        line-height: 24px;
        margin-bottom: 31px;
        color: rgba(0, 0, 0, 0.8);
    }
    header{
        width: 90%;
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
    }
`;

export const ButtonsContainer = styled.div`
    width: 50vw;
    display: flex;
    justify-content:space-between;
    margin-bottom: 30px;
`;

export const DisciplineButton = muiStyled(Button)((props) => ({
  backgroundColor: props.selectedButton === 0 ? '#1976D2' : '#FFFFFF',
  color: props.selectedButton === 0 ? '#FFFFFF' : '#1976D2',
  '&:hover': {
    backgroundColor: props.selectedButton === 0 ? '#1d68b3' : '#f2eded',
  },
}));

export const ProfessorButton = muiStyled(Button)((props) => ({
  backgroundColor: props.selectedButton === 1 ? '#1976D2' : '#FFFFFF',
  color: props.selectedButton === 1 ? '#FFFFFF' : '#1976D2',
  '&:hover': {
    backgroundColor: props.selectedButton === 1 ? '#1d68b3' : '#f2eded',
  },
}));

export const AddButton = muiStyled(Button)((props) => ({
  backgroundColor: props.selectedButton === 2 ? '#1976D2' : '#FFFFFF',
  color: props.selectedButton === 2 ? '#FFFFFF' : '#1976D2',
  '&:hover': {
    backgroundColor: props.selectedButton === 2 ? '#1d68b3' : '#f2eded',
  },
}));

export const Accordion = styled.button`
  background-color: #FFFFFF;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 50%;
  text-align: left;
  border: none;
  outline: none;
  transition: 0.4s;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
  :hover {
  background-color: #ccc;
}
`;

export const Panel = styled.div`
  width: 50vw;
  padding: 0 18px;
  background-color: white;
  display: ${(props) => (props.toggle ? 'block' : 'none')};
  overflow: hidden;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
`;
