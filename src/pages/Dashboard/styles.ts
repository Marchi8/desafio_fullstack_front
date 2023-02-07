import styled from "styled-components";

const Main = styled.main`
    list-style: none;
    // background-color: red;
    display: flex;
    flex-direction: column; 
    justify-content: flex-start;
    align-items: center;
    width: 100vw;
    height: 100vh;

    section{
        // background-color: blue;
        display: flex;
        flex-direction: row; 
        justify-content: space-evenly;
        align-items: center;
        width: 100vw;
        height: 100vh;
    }

    p{
        color: white;
    }

    ul{
        // background-color: white;
        display: flex;
        flex-direction: column; 
        justify-content: flex-start;
        align-items: center;
        padding: 0;
        width: 30vw;
        height: 50vw;
        overflow-x: auto;
    }

`

export { Main }