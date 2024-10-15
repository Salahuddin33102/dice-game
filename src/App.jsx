import { useState } from 'react';
import './App.css';
import StartGame from './components/StartGame';
import GamePlay from './components/GamePlay';
function App() {
  const [gameStarted, setGameStarted] = useState(false)
  const toggleGamePlay = () => {
    setGameStarted((prev) => !prev)
  }
  return (
    <>
      {
        gameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />
      }
    </>
  )
}
export default App;
