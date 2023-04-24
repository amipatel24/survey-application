import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiEdit } from "react-icons/fi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { MdDelete } from 'react-icons/md';
import EscapeOutside from "react-escape-outside";
import "./admin.css";
import { adminprofile } from "../../assets/Img/Img";
import { getRegistrationDataAction } from "../../redux/action/RegistrationUser/getRegistrationDataAction";
import { editUserData } from "../../redux/action/AdminUser/EditUserDataAction";
import { deleteUserAction } from "../../redux/action/AdminUser/deleteUserAction";
import AddUser from '../AddUser/Adduser';
import EditUser from '../EditUser/Edituser';

const Admin = () => {
    const [show, setShow] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const dispatch = useDispatch();
    const userdata = useSelector((state) => state?.getRegistrationDataReducer?.users);
   // console.log(userdata);

    useEffect(() => {
        dispatch(getRegistrationDataAction());
    }, []);

    const Edit = (data) => {
        setShowEdit(true);
        dispatch(editUserData(data));
    };

    const DeleteUser = (data) => {
        dispatch(deleteUserAction(data.id, data));
        window.location.reload();
    };

    return (
        <div>
            <div className="admin-container">
                <div className="admin-details-wrapper">
                    <ToastContainer
                        position="top-center"
                        autoClose={1000} />

                    <div className="admin-wrapper-heading">
                        <div className="admin-details-title">
                            Company name's (team total members in the company)
                        </div>
                        <button className="admin-details-add-button" onClick={() => setShow(true)}>
                            +Add New
                        </button>
                    </div>

                    <EscapeOutside onEscapeOutside={() => setShow(false)} >
                        <div> {show && <AddUser setShow={setShow} />} </div>
                    </EscapeOutside>
                    <EscapeOutside onEscapeOutside={() => setShowEdit(false)} >
                        <div>{showEdit && <EditUser setShowEdit={setShowEdit} />} </div>
                    </EscapeOutside>


                    <div className="admindata-container">
                        {userdata &&
                            userdata.map((user, id) => {
                                //    console.log(user);
                                return (
                                    <div className="admindata" key={id}>

                                        {user.image_src == null ? (
                                            <img className="user-admin-image" src={adminprofile} alt="" />
                                        ) : (
                                            <img
                                                className="user-admin-image"
                                                src={"http://localhost:4000/" + user.image_src}
                                                alt=""
                                            />
                                        )}

                                        <p className="admin-user-name">{user.name}</p>
                                        <div className="report-data">
                                            <div>
                                                <span className="user-text">
                                                    {user.reporting_person_name == null ? (
                                                        <b className="user-role">{user.role}</b>
                                                    ) : (
                                                        <div className="user-report">
                                                            <p className="reporting-txt">reporting to</p>
                                                            <br />
                                                            <span className="user-role-name">
                                                                {user.reporting_person_name}
                                                            </span>
                                                        </div>
                                                    )}
                                                </span>
                                            </div>
                                            <div>
                                                <span className="edituser-icon" onClick={() => Edit(user)}>
                                                    <FiEdit />
                                                </span>
                                                <span>
                                                    <MdDelete className="deleteuser-icon" onClick={() => DeleteUser(user)} />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
