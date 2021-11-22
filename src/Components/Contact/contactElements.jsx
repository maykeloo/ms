import styled from "styled-components";

export const ContactSection = styled.section`
    width: 100vw;
    margin-top: 150px;
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
    background-color: #F1FAEE;
    display: flex;

    @media screen and (max-width: 1200px){
        flex-direction: column;
        align-items: center;
    }
`

export const LeftSize = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1200px){
        width: 100%;
    }
`

export const FormBox = styled.div`
    width: 100%;
    height: 70%;
    margin-bottom: 100px;
    margin-top: 100px;
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
    padding: 20px 25px;
    background-color: transparent;
    border: 3px solid #A8DADC;
    border-radius: 2px;
    color: #457B9D;
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
    border: 3px solid #A8DADC;
    border-radius: 2px;
    color: #457B9D;
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
    background-color: #A8DADC;
    border: 3px solid #A8DADC;
    border-radius: 2px;
    color: #264653;
    outline: none;
    font-size: 24px;
    font-weight: bold;
    transition: 0.3s;
    cursor: pointer;  
    margin-top: 20px;  

    &:hover {
        background-color: #F1FAEE;
        color: #457B9D;
        border: 3px solid #457B9D;
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

export const RightSide = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1200px)
    {
        width: 65%;
    }
`

export const RightSideContentBox = styled.div`
    width: 90%;
    height: 90%;
`

export const TitleBar = styled.div`
    width: 40%;
    height: 20%;
`
export const Title = styled.h3`
    color: #E63946;
    font-weight: 900;
    font-size: 4em;
`

export const SmallContactBox = styled.div`
    width: 50vw;
    height: 20vh;
`

export const SmallTitle = styled.span`
  color: #A8DADC;
  font-size: 20px;
`;

export const Data = styled.p`
    color: #1D3557;
    font-weight: bold;
`

export const SocialBar = styled.div`
    width: 50%;
    height: 20vh;
    background-color: red;
`

export const WantMore = styled.h4`
    color: #1D3557;
    margin: 0;
    font-weight: bold;
    font-size: 2em;
`