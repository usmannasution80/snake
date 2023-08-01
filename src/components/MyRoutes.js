import {Routes, Route} from 'react-router-dom';
import MainMenu from './MainMenu';
export default () => {
  return (
    <Routes>
      <Route path="/" element={<MainMenu/>}/>
    </Routes>
  );
};