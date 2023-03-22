import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

export const StyledApp = styled.div`
  position:relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const AppContainer = styled.div`
    width: 1020px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    @media (max-width: 1019px) {
      width: 764px;
    }

    @media (max-width: 763px) {
      width: 501px;
    }

    @media (max-width: 500px) {
      width: 312px;
    }
`

export const AuthBtn = styled.div`
  position: absolute;
  top: 28px;
  right: 10%;
  align-self: flex-end;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
` 