import './App.css';
import LoginButton from '../LoginButton.js';
import LogoutButton from '../LogoutButton.js';
import Profile from '../Profile.js';
import { useAuth0 } from '@auth0/auth0-react';


function App() {
const { isLoading } = useAuth0();


if(isLoading) return <div>Loading...</div>
  return (
    <main className='main'>
      <nav>
        <h1>car Meetz</h1>
        <LoginButton />
        <LogoutButton />
        <Profile />
      </nav>
    </main>
  );
}

export default App;
