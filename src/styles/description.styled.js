import styled from "styled-components";

export const DescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;

    width: 100%;
    @media (max-width: 500px) {
        gap: 34px;
        justify-content: flex-start;
    }
`

export const Profile = styled.div`
    /* margin-top: 28px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 500px) {
        margin-top: 124px;
        gap: 34px;
    }
   
`

export const ProfilePhoto = styled.div`
    width: 300px;
    height: 300px;
    border: 5px solid lightgray ;
    border-radius: 150px;

    img {    
        max-width: 100%;
        border-radius: 150px;
    }

    @media (max-width: 500px) {
        width: 150px;
        height: 150px;
    }
`

export const ProfileTitle = styled.div`
    width: 100%;        
    max-width: 500px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #081F32;

    @media (max-width: 500px) {
        font-size: 32px;
        line-height: 38px;
        color: #081F32;
    }
`

export const Information = styled.div`

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.15px;
    color: #8E8E93;
    @media (max-width: 500px) {
        align-self: flex-start;
    }
`

export const CharacterDetails = styled.div`
    width: 100%;      
    max-width: 413px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    @media (max-width: 500px) {
        align-self: flex-start;
    }
`

export const DetailItem = styled.div`
    width: 100%;        
    max-width: 413px;
    height: 64px;
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid rgba(33,33,33, 0.08);
`

export const DetailItemTitle = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
    color: #081F32;
`

export const DetailItemValue = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
    color: #6E798C;
`

export const StyledButton = styled.div`
    position: absolute;
    left: -100px;
    top: 0;
    left: 82px;
    top: 23px;
    font-family: 'Karla';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
    color: #000000;

    @media (max-width: 768px) {
        left: 4%;
        width: 100px;
        justify-self: flex-start;
        font-size: 14px;

        img {
            width: 24px;
            height: 24px;
        }
    }
        

`