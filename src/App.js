import './App.css'
import Header from './components/Header/Header'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsConteiner';
import NavbarContainer from './components/Navbar/NavbarContainer'
import FriendsContainer from './components/Friends/FriendsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import ProfileContainer2 from './components/Profile/ProfileContainer2';




function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavbarContainer />
        <div className="app-wrapper-content">
          <Routes>
            {/* <Route path="/" element={<Profile/>} />   */}
            <Route path="/profile/" element={<ProfileContainer/>} />
            <Route path="/profile/:userId" element={<ProfileContainer/>} />
            <Route path="/dialogs/*" element={<DialogsContainer/>} />
            <Route path="/news" element={<News />} /> 
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/friends" element={<FriendsContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
