import styled from "styled-components";

const FriendCardStyle = styled.li`
    list-style: none;
    background-color: pink;
    display: flex;
    flex-direction: column; 
    justify-content: flex-start;
    align-items: center;
    margin:10px;
    border-radius: 30px;
    width: 500px;

    p{
        color: white;
    }

    button{
        border: 1px solid white;
    }

    #open-edit{
        // background-color: pink;
        border-radius: 100px;
        font-size: 20px;
        // margin-left: 10px;
        padding: 0;
        width: 50px;
        height: 50px;
    }
`

export { FriendCardStyle }