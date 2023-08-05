import {Routes, Route} from 'react-router-dom';
import MainMenu from './MainMenu';
import GameField from './GameField';
import Highscores from './Highscores';
import Options from './Options';

export default () => {
  return (
    <Routes>
      <Route path="/" element={<MainMenu/>}/>
      <Route path="/game" element={<GameField/>}/>
      <Route path="/highscores" element={<Highscores/>}/>
      <Route path="/options" element={<Options/>}/>
    </Routes>
  );
};