import React from 'react'
import { StyledIcon } from '../../styles/icon.styled'

export const Icon = ({imgName, text, func}) => {
  return (
    <StyledIcon onClick={func ? () => func() : () => false}>
        <img src={`/08_rick-n-morty/icons/${imgName}.png`} alt={imgName}/>
        {text ? <p>{text}</p> : <></>}
    </StyledIcon>
  )
}
