import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home, Register, Survey , Admin , Worker } from './components/constant/constant';
import WorkerData from './components/Survey/WorkerData';
import Protected from './pages/protected';
import ErrorPage from "./pages/404Page";
import Homepage from './pages/home';
import Registration from './pages/RegistrationPage';
import SurveyApp from './pages/surveyPage';
import AdminPage from "./pages/adminPage";

function App() {
  
  return (
    <div>
      <div>
        <div className='wrapper'>
          <Routes>
             {/* <Route path={Home} element={< Login />} /> */}
            <Route path={Home} element={<Protected Component={Homepage} />} />
            <Route path={Register} element={<Registration />} />
            <Route path={Admin} element={<Protected Component={AdminPage} />} />
            <Route path={Survey} element={<Protected Component={SurveyApp} />} />
            <Route path={Worker} element={<Protected Component={WorkerData} />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes> 

        </div>
      </div>
    </div>
  );
};
export default App; 