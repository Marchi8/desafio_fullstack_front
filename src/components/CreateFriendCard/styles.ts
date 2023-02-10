import styled from "styled-components";

const CreateFriendCardStyle = styled.li`
    list-style: none;
    background-color: black;
    border: 2px solid pink;
    display: flex;
    flex-direction: column; 
    justify-content: flex-start;
    align-items: center;
    margin:10px;
    width: 150px;
    height: 150px;
    border-radius: 30px;
    position: fixed;
    bottom: 10px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    p{
        color: white;
    }

    button{
        border: 1px solid white;
    }
`

export { CreateFriendCardStyle }