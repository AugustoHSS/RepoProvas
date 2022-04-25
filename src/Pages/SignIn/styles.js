import styled from 'styled-components';
import { styled as muiStyled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const Container = styled.div`
    height: 100vh;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
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
        position: absolute;
        top: 5%;
    }
`;

export const DividerContainer = styled.div`
    width: 50vw;
    font-weight: 500;
    font-size: 12px;
    line-height: 24px;
    letter-spacing: 0.15px;
`;

export const GitHubLoginButton = muiStyled(Button)({
  background: '#424445',
  width: '50vw',
  marginBottom: '20px',
  '&:hover': {
    backgroundColor: '#323638',
  },
});

export const Form = styled.form`
  margin-top: 27px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FormFooter = styled.div`
    margin-top:20px;
    width: 50vw;
    display: flex;
    justify-content:space-between;
    button{
        font-weight: 500;
        font-size: 14px;
    }
    a{
        all: unset;
        cursor: pointer;
        color: rgba(70, 115, 202, 0.8);
        letter-spacing: 0.15px;
        text-decoration-line: underline;
        font-weight: 500;
        font-size: 12px;
        line-height: 24px;
    }
`;
