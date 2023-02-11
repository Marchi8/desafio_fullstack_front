import styled from "styled-components";

const AllUsersCardStyle = styled.li`
    background-color: black;
    border: 2px solid pink;
    display: flex;
    flex-direction: column; 
    justify-content: flex-start;
    align-items: center;
    margin:10px;
    border-radius: 30px;
    word-wrap: break-word;

    div{
        width:180px;
    }

    p{
        margin-bottom: 30px;
    }
`

export { AllUsersCardStyle }