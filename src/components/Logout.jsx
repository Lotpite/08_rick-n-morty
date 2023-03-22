import React from 'react'
import { googleLogout } from "@react-oauth/google";
import { Icon } from './UI/Icon';
import { StyledLogout, UserPic } from '../styles/auth.styled';
import { logoff } from '../services/auth';
import { AuthBtn } from '../styles/app.styled';


export const Logout = ({userName, userPicture, setUser}) => {

    const logout = () => {
        googleLogout()
        logoff()
        setUser('')
    }

  return (
    <AuthBtn>
      <UserPic>
                <img src={`${userPicture}`} alt="user" />
      </UserPic>
      {userName}
      <StyledLogout>
          <Icon imgName="logout" func={logout}/>
      </StyledLogout>
    </AuthBtn>
  )
}
