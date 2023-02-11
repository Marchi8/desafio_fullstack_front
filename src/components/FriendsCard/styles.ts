import styled from "styled-components";

const FriendCardStyle = styled.li`
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

    #open-edit{
        border-radius: 100px;
        font-size: 20px;
        padding: 0;
        width: 50px;
        height: 50px;
    }
`

export { FriendCardStyle }