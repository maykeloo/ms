import styled from "styled-components";

export const ContactSection = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`

export const ContactContentBox = styled.div`
    width: 100%;
    height: 80%;
`

export const FormContent = styled.div`
    width: 100%;
    height: 100%;
    background-color: #E9C46A;
`

export const LeftSize = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FormBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const FormLabel = styled.div`
    width: 100%;
    height: 90%;
`

export const Input = styled.input`
    width: 100%;
    padding: 10px 25px;
    background-color: transparent;
    border: 3px solid white;
    border-radius: 2px;
    color: white;
    outline: none;
    font-size: 24px;
    margin-top: 20px;
    -moz-appearance: textfield;

    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
         margin: 0;
    }

    &::-webkit-outer-spin-button {
        -webkit-appearance: none;
         margin: 0;
    }
    
    &::placeholder {
        color: #264653;
        font-size: 18px;
    }
`

export const Text = styled.textarea`
    width: 100%;
    padding: 25px;
    background-color: transparent;
    border: 3px solid white;
    border-radius: 2px;
    color: white;
    outline: none;
    font-size: 16px;
    margin-top: 20px;

    &::placeholder {
        color: #264653;
        font-size: 18px;
    }
`

export const Submit = styled.input`
    width: 100%;
    padding: 25px;
    background-color: white;
    border: 3px solid white;
    border-radius: 2px;
    color: #264653;
    outline: none;
    font-size: 30px;
    font-weight: bold;
    transition: 0.3s;
    cursor: pointer;  
    margin-top: 20px;  

    &:hover {
        background-color: #F4A261;
        color: white
    }

`

export const ErrorBar = styled.div`
    width: 100%;
    height: 30px;
    margin-top: 5px;
    font-size: 14px;
`

export const ErrowText = styled.span`
    color: red;
`

export const SentText = styled.span`
    color: green;
`
