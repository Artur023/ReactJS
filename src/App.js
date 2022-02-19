import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsConteiner";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileConteiner from "./components/Profile/ProfileConteiner";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar tops={props.store.getState().navBar.tops}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile/' element={<ProfileConteiner store={props.store}/>}>
                            <Route path=':userId' element={<ProfileConteiner store={props.store}/>}/>
                        </Route>
                        <Route path='/dialogs'
                               element={<DialogsContainer store={props.store}/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                        <Route path='/users' element={<UsersContainer/>}/>
                        <Route path='/friends' element={<Friends/>}/>
                        <Route path='/login' element={<Login />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;