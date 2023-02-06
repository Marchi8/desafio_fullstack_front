import './App.css'
import GlobalStyle from './styles/global'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import UserProvider from './contexts/UserContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import FriendProvider from './contexts/FriendsContext'

function App() {

  return (
    <div className="App">
      <UserProvider>
        <FriendProvider>
          <GlobalStyle />
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </FriendProvider>
      </UserProvider>
    </div >
  )
}

export default App
