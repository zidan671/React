import './App.css'
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsConteiner';
import NavbarContainer from './components/Navbar/NavbarContainer'
import FriendsContainer from './components/Friends/FriendsContainer';




function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavbarContainer />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/" element={<Profile/>} />  
            <Route path="/profile" element={<Profile/>} />
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
