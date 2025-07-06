import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import CandyListComponent from './components/PropsComponent/CandyListComponent/CandyListComponent';
import BolinhoDetail from './components/BolinhoDetail/BolinhoDetail';
import BolinhoForm from './components/BolinhoForm/BolinhoForm';
import BolinhoList from './components/BolinhoList/BolinhoList';
import Card from './components/Card/index';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />
      <div className="centralizado">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bolinhos/*" element={<BolinhoList />}>
            <Route path=":bolinhoId" element={<BolinhoDetail />} />
          </Route>
          <Route path="/form" element={<BolinhoForm />} />
          <Route path="/card" element={<Card />} />
          <Route path="/candies" element={<CandyListComponent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
