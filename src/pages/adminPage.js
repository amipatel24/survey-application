import React from "react";
import AdminHeader from '../components/Admin/AdminHeader/AdminHeader';
import AdminFooter from '../components/Admin/AdminFooter/AdminFooter';
import Admin from '../components/Admin/admin';

function Home(){
    return(
        <div>
            <AdminHeader />
            <Admin />
            <AdminFooter />
        </div>
    )
}

export default Home;