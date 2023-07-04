import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Register from './pages/Register';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';
import { UserContextProvider } from './components/UserContext';
import PostPage from './pages/PostPage';
import EditPost from './pages/EditPost';

function App() {
  return (
    <UserContextProvider>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/create' element={<CreatePost/>} />
        <Route path='/post/:id' element={<PostPage/>} />
        <Route path='/edit/:id' element={<EditPost/>} />

        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
  
    </UserContextProvider>
  );
}

export default App;
