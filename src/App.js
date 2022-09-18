import './App.css';
import { Home } from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom'
import { NavBar } from './Components/NavBar/NavBar';
import NavBarMobile from './Components/NavBar/NavBarMobile/NavBarMobile';

function App() {
  return (
    <div className="App">
      {window.innerWidth < 1000 ? <NavBarMobile /> : <NavBar />}
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div >
  );
}

export default App;
