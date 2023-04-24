import React, { useEffect } from 'react'
import { useNavigate  } from 'react-router-dom';

const Protected = (props ) => {
    const { Component } = props;
    const navigate = useNavigate();

    useEffect(() => {
        let admin = localStorage.getItem("UserRole");
        if (admin !== "admin") {
            navigate("/");
          }
        },[]);
    
    return (
        <div>
        <Component />
        </div>
    )
};

export default Protected;
