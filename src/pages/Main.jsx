import React, { useEffect, useState } from 'react'
import { Card } from '../components/Card'
import { Icon } from '../components/UI/Icon'
import useService from '../services/api'
import { sortItems } from '../services/utils'
import { CharacterList, InputIcon, LoadMore, Logo, MainPage, Search, StyledLink } from '../styles/main.styled'

export const Main = () => {

    const [query, setQuery] = useState('')
    const [page, setPage] = useState(1)
    const [characterList, setCharacterList] = useState([])
    const [searchedList, setSearchedList] = useState([])
    const {loading, error, getAllCharacters} = useService()

    useEffect(() => {
        let charList = checkInitialList('charList')
        console.log(process.env.GOOGLE_API_KEY)
        if (charList) {
            setCharacterList(charList.newCharList)
            setPage(charList.page)
        } else {
            getCharacterList(page) 
        }
    }, [])

    const getCharacterList = (page) => {
            getAllCharacters(page)
            .then(res => {
                let newCharList = [...characterList, ...res]
                    setCharacterList(sortItems(newCharList))
                    localStorage.setItem('charList', JSON.stringify({newCharList, page}))
            })
    }

    const searchCharacter = (inputValue) => {
        setQuery(inputValue)
        let searchedList = characterList.filter(character => character.name.toLowerCase().includes(inputValue.toLowerCase()))
        setSearchedList(sortItems(searchedList))
    }

    const loadMoreCharacters = () => {
        if(page === 42) {
            alert('It was the last page')
        } else {
            setPage(page + 1)
            getCharacterList(page + 1)
        }
    }

    const checkInitialList = (key) => {
        if (JSON.parse(localStorage.getItem(key))) {
            return JSON.parse(localStorage.getItem(key))
        } else return undefined
    }


    const renderItems = (list) => {
        return (
            <CharacterList>
                {list.length > 0    
                ? list.map((char, i) => <StyledLink to={`/08_rick-n-morty/${char.id}`} key={char.id}><Card  id={char.id} name={char.name} src={char.image} specie={char.species}/></StyledLink>) 
                : <div></div>
                }
            </CharacterList>
        )
    }

  return (
    <MainPage>
        <Logo>
            <Icon imgName="logo"/>  
        </Logo>
        <Search>
            <input type="text" placeholder='Filter by name...' value={query} onChange={(e) => searchCharacter(e.target.value)}/>
            <InputIcon>
                <Icon imgName='loupe'/>
            </InputIcon>
        </Search>
            {error === null
            ? characterList && renderItems(query !== '' ? searchedList : characterList)
            :<h1>Oops, something went wrong</h1>}
        {page === 42 
        ? <></>
        : <LoadMore onClick={loading ? () => false : () => loadMoreCharacters()} isLoading={loading}>Load more</LoadMore>}
    </MainPage>
  )
}
