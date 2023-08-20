import {Routes, Route} from 'react-router-dom';
import MainMenu from 'components/MainMenu';
import GameField from 'components/GameField';
import Highscores from 'components/Highscores';
import Options from 'components/Options';

function MyRoutes(){
  return (
    <Routes>
      <Route path="/" element={<MainMenu/>}/>
      <Route path="/game" element={<GameField/>}/>
      <Route path="/highscores" element={<Highscores/>}/>
      <Route path="/options" element={<Options/>}/>
    </Routes>
  );
};

export default MyRoutes;