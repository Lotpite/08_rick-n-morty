import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Icon } from '../components/UI/Icon'
import useService from '../services/api'
import { CharacterDetails, DescriptionWrapper, DetailItem, DetailItemTitle, DetailItemValue, Information, Profile, ProfilePhoto, ProfileTitle, StyledButton } from '../styles/description.styled'
import { StyledLink } from '../styles/main.styled'

export const Description = () => {

    const [character, setCharacter] = useState('')
    const {id} = useParams('')
    const {loading, error, getCharacterById} = useService()

    useEffect(() => {
        getCharacter()
    }, [id])

    const getCharacter = () => {
        getCharacterById(id)
        .then(res => setCharacter(_translateObject(res)))
    }

    const _translateObject = (charObject) => {
       return {
        id: charObject.id,
        name: charObject.name,
        photo: charObject.image,
        details: [
          {Gender: charObject.gender},
          {Status: charObject.status},
          {Specie: charObject.species},
          {Origin: charObject.origin.name},
          {Type: charObject.type},
        ]
      }
    }

  return (
    <DescriptionWrapper>
        <StyledLink to="/08_rick-n-morty">
          <StyledButton>
            <Icon imgName="arrowLeft" text="GO BACK"/>
          </StyledButton>
        </StyledLink>
        
        {character && loading === false
        ? (
        <>
        <Profile>
          <ProfilePhoto>
              <img src={character.photo} alt={character.name}/>
          </ProfilePhoto>
          <ProfileTitle>
              {character.name}
          </ProfileTitle>
        </Profile>
        
        <Information>
            Informations
        </Information>
        <CharacterDetails>
          {character.details.map(item => (
              Object.entries(item).map(([key, value]) => {
                return (
                  <DetailItem key={key}>
                  <DetailItemTitle>
                    {key}
                  </DetailItemTitle>
                  <DetailItemValue>
                    {value ? value : 'Unknown'}
                  </DetailItemValue>
                </DetailItem>
                )
              })
          ))}
          </CharacterDetails>
      </>) 
        : (<h3>{loading ? 'Loading...' : 'No character details'}</h3>)}
    </DescriptionWrapper>
  )
}
