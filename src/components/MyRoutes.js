import {Routes, Route} from 'react-router-dom';
import MainMenu from 'components/MainMenu';
import GameField from 'components/GameField';
import Highscores from 'components/Highscores';
import Options from 'components/Options';
import LevelSelection from 'components/LevelSelection';
import ChangeLanguage from 'components/ChangeLanguage';

function MyRoutes(){
  return (
    <Routes>
      <Route path="/" element={<MainMenu/>}/>
      <Route path="/game" element={<GameField/>}/>
      <Route path="/highscores" element={<Highscores/>}/>
      <Route path="/options" element={<Options/>}/>
      <Route path="/level-selection" element={<LevelSelection/>}/>
      <Route path="/change-language" element={<ChangeLanguage/>}/>
    </Routes>
  );
};

export default MyRoutes;