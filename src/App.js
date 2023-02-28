import React from 'react'
import "./App.css";
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from './components/Layout';
import Homepage from './pages/Homepage';
import Movie from './pages/Movie';
import Tvshows from './pages/Tvshows';
import Musicpage from './pages/Musicpage';
const App = () => {
  return (
    <><BrowserRouter>
    <Routes>
       <Route path="/" element={<Layout />}>
        <Route path="/" element={<Homepage />}/>
        <Route path="movies" element={<Movie />}/>
        <Route path="tv&shows" element={<Tvshows />}/>
        <Route path="music" element={<Musicpage />}/>
        </Route>
    
    </Routes>
    </BrowserRouter>
    
  </>);
}

export default App;