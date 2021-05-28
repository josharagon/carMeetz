import './App.css';
import LoginButton from '../LoginButton.js'
import LogoutButton from '../LogoutButton.js'


function App() {


  return (
    <main className='main'>
      <nav>
        <h1>car Meetz</h1>
        <LoginButton />
        <LogoutButton />
      </nav>
    </main>
  );
}

export default App;
