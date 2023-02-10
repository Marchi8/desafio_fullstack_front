import styled from "styled-components";

const EditFriendCardStyle = styled.li`
    list-style: none;
    background-color: pink;
    display: flex;
    flex-direction: column; 
    justify-content: flex-start;
    align-items: center;
    margin:10px;
    width: 150px;
    height: 150px;
    border-radius: 30px;

    p{
        color: white;
    }

    button{
        border: 1px solid white;
    }
`

export { EditFriendCardStyle }