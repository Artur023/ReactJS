import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {HashRouter, Routes, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsConteiner";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileConteiner from "./components/Profile/ProfileConteiner";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";

// const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsConteiner'));
// const ProfileConteiner = React.lazy(() => import('./components/Profile/ProfileConteiner'));

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <HashRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar tops={this.props.store.getState().navBar.tops}/>
                    <div className='app-wrapper-content'>
                        <Routes>
                            <Route path='/profile/' element={<ProfileConteiner/>}>
                                <Route path=':userId' element={<ProfileConteiner/>}/>
                            </Route>
                            <Route path='/dialogs'
                                   element={<DialogsContainer/>}/>
                            <Route path='/news' element={<News/>}/>
                            <Route path='/music' element={<Music/>}/>
                            <Route path='/settings' element={<Settings/>}/>
                            <Route path='/users' element={<UsersContainer/>}/>
                            <Route path='/friends' element={<Friends/>}/>
                            <Route path='/login' element={<Login/>}/>
                        </Routes>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

const mapStateToProps = state => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App);