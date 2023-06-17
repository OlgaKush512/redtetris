import { BrowserRouter } from 'react-router-dom';
import ButtonStart from './components/ButtonStart';
import LoginForm from './components/LoginForm';
import NavBar from './components/NavBar';


const App = () => {
  return (
    <BrowserRouter>
        <NavBar />
        <ButtonStart />
        <LoginForm />
    </BrowserRouter>
  );
};

export default App;
