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
import { useState } from 'react';
function App() {
    const [currentUser, setCurrentUser] = useState(null)
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<HomeWraper {...{currentUser, setCurrentUser}}/>}>
                <Route index element={<HomePage {...{currentUser}}/>} />
                <Route path='myPosts' element={<MyPosts {...{currentUser}}/>}/>
                <Route path='newPost' element={<NewPost  {...{currentUser}}/>}/>
                <Route path='/unique'>
                    <Route path='showPost/:id' element={<ShowPost {...{currentUser}}/>}/>
                    <Route path='editPost/:id' element={<EditPost/>}/>
                </Route>
            </Route>

            <Route path='/auth'>
                <Route path='login' element={<LoginPage {...{setCurrentUser, currentUser}}/>}/>
                <Route path='registr' element={<RegistrPage/>}/>
            </Route>

            <Route path='*' element={<Error/>}/>
        </Routes>
    </div>
  );
}

export default App;
