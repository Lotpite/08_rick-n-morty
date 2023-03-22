import styled from "styled-components";

export const CardItem = styled.div`
    display: flex;
    flex-direction: column;
    /* width: 100%; */
    /* max-width: 240px;
    max-height: 244px; */
    background: #FFFFFF;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14);
    border-radius: 4px;
    
    :hover {
        transform: scale(1.03);
        box-shadow: 8px 8px 5px rgba(0, 0, 0, 0.3);
        z-index: -1;
    }

    /* @media (max-size: 500px) {
        width: 100%;
        height: 308px;
    } */

`

export const Avatar = styled.div`

    img {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        width: 100%;
        height: 168px;
        object-fit: fill;
    }
`

export const CardShort = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px 16px 12px 16px;
`

export const Name = styled.p`
    width: 208px;
    word-wrap: inherit;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    display: flex;
    align-items: center;
    letter-spacing: 0.15px;
    color: rgba(0, 0, 0, 0.87);
`

export const Specie = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.25px;
    color: rgba(0, 0, 0, 0.6);
    mix-blend-mode: normal;
`