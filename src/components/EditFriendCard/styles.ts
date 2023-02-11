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

    form{
        width:180px;
        display: flex;
        flex-direction: column; 
        justify-content: flex-start;
        align-items: center;
        margin-top: -10px;
    }
    
    form>div{
        display: flex; 
        align-items: flex-start;
        flex-direction: column;
        height: 120px;
    }

    input{
        width: 150px;
        height: 40px;
        font-size: 18px;
        border-radius: 10px;
    }

    span{
        color: red;
    }
`

export { EditFriendCardStyle }