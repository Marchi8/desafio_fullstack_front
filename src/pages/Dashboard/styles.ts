import styled from "styled-components";

const Main = styled.main`
    list-style: none;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column; 
    justify-content: flex-start;
    align-items: center;

    header{
        width: 100vw;
        background-color: black;
        display:flex;
        flex-direction: column;
        align-items: flex-start;
    }

    header>div{
        // background-color: pink;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100vw;
    }

    header>div>button{
        width: 90px;
        height: 55px;
    }
    
    a>button{
        position: absolute;
        right: 20px;
        top: 15px;
    }

    h2{
        margin-left: 20px;
    }

    section{
        width: 100vw;
        display: flex;
        flex-direction: column; 
        justify-content: center;
        align-items: center;
    }

    p{
        color: white;
    }

    ul{
        display: flex;
        flex-direction: row; 
        justify-content: flex-start;
        // justify-content: center; Aplicar essa confirguração na versão desktop
        width: 100vw;
        padding: 0;
        height: 290px;
        overflow-x: auto;
    }
`

export { Main }