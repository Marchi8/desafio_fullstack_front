import styled from "styled-components";

const FormLogin = styled.form`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 460px;

    div{
        display: flex; 
        align-items: flex-start;
        flex-direction: column;
        height: 120px;
    }

    input{
        width: 260px;
        height: 50px;
        font-size: 18px;
        border-radius: 10px;
    }

    span{
        color: red;
    }
`

export { FormLogin }