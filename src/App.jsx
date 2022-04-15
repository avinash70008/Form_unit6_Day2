import { Route, Routes } from 'react-router-dom';
import './App.css';
import { UserAddress } from './States/UserAddress';
import { UserDetails } from './States/UserDetails';
import { Users } from './States/Users';
import { Home } from './States/Home'
// import {Navbar} from './States/Navbar';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/registration/one' element={<UserDetails />}></Route>
        <Route exact path='/registration/two' element={<UserAddress />}></Route>
        <Route exact path='/users' element={<Users />}></Route>
      </Routes>
    </div>
  );
}

export default App;
