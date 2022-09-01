import './App.css';
import { Home } from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom'
import { NavBar } from './Components/NavBar/NavBar';
import { Tips } from './Components/Tips/Tips';
import { PortalProvider } from './Context/contextPortal';

function App() {
  return (
    <PortalProvider>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='tips' element={<Tips />} />
        </Routes>
      </div >
    </PortalProvider>
  );
}

export default App;
