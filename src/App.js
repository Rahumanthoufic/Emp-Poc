import react from 'react';
import Home from './Home';
import MasterData from './pages/MasterData';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Home />} />
          <Route path="teams" element={<MasterData />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
