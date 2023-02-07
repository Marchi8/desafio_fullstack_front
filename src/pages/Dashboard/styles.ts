import styled from "styled-components";

const Main = styled.main`
    list-style: none;
    // background-color: red;
    // display: flex;
    // flex-direction: column; 
    // justify-content: center;
    // align-items: center;
    width: 100vw;
    height: 100vh;

    section{
        // background-color: blue;
        display: flex;
        flex-direction: column; 
        justify-content: center;
        align-items: center;
        // width: 100vw;
        // height: 10vh;
    }

    p{
        color: white;
    }

    ul{
        // background-color: white;
        display: flex;
        flex-direction: row; 
        justify-content: flex-start;
        // align-items: center;
        // padding: 2;
        width: 82vw;
        height: 320px;
        overflow-x: auto;
    }

`

export { Main }