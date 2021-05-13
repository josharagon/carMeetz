import './App.css';
import { slide as Menu } from 'react-burger-menu'



function App() {

  function showSettings(event) {
    event.preventDefault();

  }

  return (
    <main className='main'>
      <nav>
        <Menu>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
          <a onClick={showSettings} className="menu-item--small" href="">Settings</a>
        </Menu>
        <h1>car Meetz</h1>
      </nav>
    </main>
  );
}

export default App;
