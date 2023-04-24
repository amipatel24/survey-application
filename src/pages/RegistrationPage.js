import React from "react";
import Registration from '../components/Registration/Registration';
import RegistrationHeader from '../components/Login/LoginHeader/LoginHeader';
import RegistrationFooter from '../components/Login/LoginFooter/LoginFooter';

function Home(){
    return(
        <div>
            <RegistrationHeader />
            <Registration />
            <RegistrationFooter />
        </div>
    )
}

export default Home;