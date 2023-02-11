import styled from "styled-components";

const EditFriendCardStyle = styled.li`
    list-style: none;
    background-color: black;
    border: 2px solid pink;
    display: flex;
    flex-direction: column; 
    justify-content: flex-start;
    align-items: center;
    margin:10px;
    border-radius: 30px;
    width: 500px;
    
    form{
        display: flex;
        flex-direction: column; 
        gap: 30px;
    }

    p{
        color: white;
    }

    button{
        border: 1px solid white;
    }
`

export { EditFriendCardStyle }