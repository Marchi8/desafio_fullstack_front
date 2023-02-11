import styled from "styled-components";

const EditUserCardStyle = styled.li`
    background-color: black;
    display: flex;
    flex-direction: column; 
    justify-content: flex-start;
    align-items: center;
    width: 310px;
    height: 450px;
    border-radius: 30px;
    position: fixed;
    bottom: 10px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid pink;

    form>div{
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

export { EditUserCardStyle }