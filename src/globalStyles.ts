import { createGlobalStyle } from "styled-components";

interface Props {
    theme: {
        body: string;
    }
}

const GlobalStyles = createGlobalStyle<Props>`

*{
    font-family: 'Roboto', sans-serif;
    outline: none;
}


body{
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    background-color: ${props => props.theme.body};
    transition: 0.2s;

    
}



`;

export default GlobalStyles;

