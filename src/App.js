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
  const google_api_key = process.env.REACT_APP_GOOGLE_API_KEY
  useEffect(() => {
    const candidate = JSON.parse(localStorage.getItem('user'))
    candidate && setUser(candidate)
  }, [])

  return (
    <GoogleOAuthProvider clientId={google_api_key}>
      <StyledApp>
        <GlobalStyle/>
        <BrowserRouter>
          <AppContainer>
            <Routes>
              <Route path="/08_rick-n-morty" element={<Main/>}/>
              <Route path="/08_rick-n-morty/:id" element={<Description/>}/>
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
