import React from 'react'
import { cutName } from '../services/utils'
import { Avatar, CardItem, CardShort, Name, Specie } from '../styles/card.styled'

export const Card = ({id, name, src, specie}) => {
  return (
    <CardItem>
      <Avatar>
        <img src={`${src}`} alt={`${name}`}/>
      </Avatar>
      <CardShort>
        <Name>{cutName(name)}</Name>
        <Specie>{specie}</Specie>
      </CardShort>
    </CardItem>
  )
}
