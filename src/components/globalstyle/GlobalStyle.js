import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');

  *,*::after, *::before{
    box-sizing:border-box;
    padding:0;
    margin:0;

  }

  body {
    font-family: "Roboto", sans-serif;
    background:${({ theme }) => theme.bg};
    
    color:${({ theme }) => theme.color};
  }
`;
