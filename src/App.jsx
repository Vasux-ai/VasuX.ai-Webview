import { useState } from 'react';
import './App.css';
import Home from './Components/CoreComponents/Home';
import { Welcome } from './Components/WelcomePage/Welcome';
import WelcomeRobo from './Components/WelcomePage/WelcomeRobo';

function App() {
  const [showHome, setShowHome] = useState(false);

  return (
    <>
    
       <WelcomeRobo/>
 

      {/* <Home/> */}

    </>
  );
}

export default App;
