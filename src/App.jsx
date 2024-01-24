import { useState } from 'react'
import Books from './components/Books'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Book from './components/Book'
import Navigation from './components/Navigations'
import RegistrationForm from './components/Register'
import LoginForm from './components/Login'

function App() {
  const [token, setToken] = useState(null)

  const handleLogin = () => {
    const fakeToken = '123456';
    setToken(fakeToken);
  };
  const handleLogout = () => {
    setToken(null);
  };

  return (
    <Router>
      <Navigation isLoggedIn={!!token} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/:id" element={<Book />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={< LoginForm />} />
      </Routes>
    </Router>
  )
}

export default App;
