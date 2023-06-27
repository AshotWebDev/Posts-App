import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomeWraper from './page/HomeWraper';
import HomePage from './components/HomePage/HomePage';
import MyPosts from './components/MyPosts/MyPosts';
import NewPost from './components/NewPost/NewPost';
import ShowPost from './components/ShowPost/ShowPost';
import EditPost from './components/EditPost/EditPost';
import LoginPage from './components/LoginPage/LoginPage';
import RegistrPage from './components/RegistrPage/RegistrPage';
import Error from './page/Error/Error';
function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<HomeWraper/>}>
                <Route index element={<HomePage/>} />
                <Route path='myPosts' element={<MyPosts/>}/>
                <Route path='newPost' element={<NewPost/>}/>
                <Route path='/unique'>
                    <Route path=':showPost' element={<ShowPost/>}/>
                    <Route path=':editPost' element={<EditPost/>}/>
                </Route>
            </Route>

            <Route path='/auth'>
                <Route path='/auth/login' element={<LoginPage/>}/>
                <Route path='/auth/registr' element={<RegistrPage/>}/>
            </Route>

            <Route path='*' element={<Error/>}/>
        </Routes>
    </div>
  );
}

export default App;
