import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import AddUser from './pages/AddUser';
import axios from 'axios'
import { useState,useEffect } from 'react';

function App() {
  const [users,setUsers] = useState([]);

  useEffect(() =>{
    const getUsers= async () =>{

     await axios
      .get('http://localhost:3030/posts')
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
    }
      getUsers();
  },[])

  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home userList={users} />}/>
          <Route path='/add' element={<AddUser/>}/>
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
