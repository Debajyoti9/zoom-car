import './App.css';
import Navbar from './Componets/Navbar';
import PageContainer from './Componets/PageContainer';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Main from './Componets/Main';
import PageSearchContainer from './Componets/PageSearchContainer';
import {useState} from 'react';
import Order from './Componets/Order';


function App() {
  const [city,setCity] = useState("");

  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Routes>
          <Route  exact path="/" element={<PageContainer city={city}/>}></Route>
          <Route exact path='/location' element={<Main setCity={setCity}/>}></Route>
          <Route path='/PageSearch' element={<PageSearchContainer />}></Route>
          <Route path='/order' element={<Order/>}></Route>
      </Routes>
    </Router>  
    </div>
  );
}

export default App;
