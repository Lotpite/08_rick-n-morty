import { Main } from "./pages/Main";
import { Description } from "./pages/Description";
import { AppContainer, GlobalStyle, StyledApp } from "./styles/app.styled";
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useEffect, useState } from "react";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";


const App = () => {

  const [user, setUser] = useState('')

  useEffect(() => {
    const candidate = JSON.parse(localStorage.getItem('user'))
    candidate && setUser(candidate)
  }, [])

  return (
    <GoogleOAuthProvider clientId='186186257138-i9h7msuhg0ru968697g6te7nh15jngfp.apps.googleusercontent.com'>
      <StyledApp>
        <GlobalStyle/>
        <BrowserRouter>
          <AppContainer>
            <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="/:id" element={<Description/>}/>
            </Routes>
            {!user 
            ? <Login setUser={setUser}/>
            : <Logout userName={user.name} userPicture={user.picture} setUser={setUser}/>}
          </AppContainer>
        </BrowserRouter>
      </StyledApp>
    </GoogleOAuthProvider>
  );
}

export default App;
