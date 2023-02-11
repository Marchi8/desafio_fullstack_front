import styled from "styled-components";

const FormRegister = styled.form`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1px;

    div{
        display: flex; 
        align-items: flex-start;
        flex-direction: column;
        justify-content: flex-start;
        height: 100px;
    }

    input{
        width: 260px;
        height:30px;
        font-size: 18px;
        margin-bottom: 10px;
        border-radius: 10px;
    }

    span{
        color: red;
    }
`

export { FormRegister }