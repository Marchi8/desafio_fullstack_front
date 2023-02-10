import styled from "styled-components";

const CreateFriendCardStyle = styled.li`
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
    z-index: 2;
    position: absolute; 
    p{
        color: white;
    }

    button{
        border: 1px solid white;
    }
`

export { CreateFriendCardStyle }