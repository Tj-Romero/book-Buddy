import Books from './components/Books';
import Book from './components/Book';
import Navigation from './components/Navigations'; 
import RegistrationForm from './components/Register';
import LoginForm from './components/Login';
import Checkout from './components/Checkout';
import AccountDetails from './components/Account';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/:id" element={<Book />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account" element={<AccountDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
