import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Wrapper } from './components/styled-components/styles';
import LoginForm from './components/auth/Login/LoginForm';
import RegistryForm from './components/auth/Registry/RegistryForm';
import Main from './Pages/Main';
import Protected from './components/Protected/Protected';

function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/registry" element={<RegistryForm />} />
        <Route
          path="/main"
          element={
            <Protected>
              <Main />
            </Protected>
          }
        />
      </Routes>
    </Wrapper>
  );
}

export default App;
