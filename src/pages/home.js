import React from "react";
import LoginHeader from '../components/Login/LoginHeader/LoginHeader';
import LoginFooter from '../components/Login/LoginFooter/LoginFooter';
import Login from '../components/Login/login';

function Home(){
    return(
        <div>
            <LoginHeader />
            <Login />
            <LoginFooter />
        </div>
    )
}

export default Home;