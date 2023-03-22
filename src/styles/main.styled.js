import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyledIcon } from "./icon.styled";

export const MainPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1020px;
    gap: 34px;

    @media (max-width: 500px) {
        gap: 32px;
    }
`

export const Logo = styled.div`
margin-top: 86px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

    img {
        max-width: 100%;
    }
`

export const Search = styled.div`
/* margin-top: 33px; */
position: sticky;
top: 0;
width: 100%;
max-width: 1020px;
height: 66px;
display: flex;
flex-direction: row;
align-items: center;
z-index: 1;
input {
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 8px;
    padding: 16px;
    padding-left: 48px;
    width: 100%;
    height: 100%;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: rgba(0, 0, 0, 0.5);
}
`

export const InputIcon = styled(StyledIcon)`
    position: absolute;
    margin-left: 16px;
`

export const CharacterList = styled.div`
    /* margin-top: 44px; */
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 20px;
    flex-wrap: wrap;

    @media (max-width: 500px) {
        gap: 32px;
    }
`

export const StyledLink = styled(Link)`
    text-decoration: none;

    

    @media (max-width: 500px) {
        width: 100%;
       img {
        height: 232px;
        /* object-fit: fill; */
       }
    }
`   

export const LoadMore = styled.div`
    margin-bottom: 33px;
    width: 200px;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #074648;
    color: ${({isLoading}) => isLoading ? '#074648' : '#ffffff'};
    border-radius: 8px;
    :hover {
        cursor: pointer;
    }

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    display: flex;
    align-items: center;
    letter-spacing: 0.15px;
`