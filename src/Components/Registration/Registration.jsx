import React, {useContext, useState} from "react";
import { useDispatch } from "react-redux";
import { Route } from "/src/Routing/Rout";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import FormikInput from "/src/Components/FormikInputs/FormikInput";
import styled from "styled-components";
import { registerUser } from "../../api/instance";
import { ModalContext } from "/src/HOC/GlobalModalProvider";

const StyledRegistration = styled.div`
.modal {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    top: 0;
    left: 0;
    z-index: 1000;
    transition: top 0.4s, opacity 0.4s;
}
.newtask-body {
          min-height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 30px 10px;
        }
        
        .newtask-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex-wrap: wrap;
          background-color: rgb(211, 208, 208);
          color: #221c1d;
          max-width: 30,5%;
          padding: 30px;
          border-radius: 4px;
          position: relative;
        }
        .form-row {
    display: flex;
    flex-direction: row;
    margin: 0.2rem;
}

.form-row-label {
    width: 15%;
    padding: 0.2rem;
    padding-right: 0.5rem;
    border: 0.1rem solid black;
    border-right: 0;
    border-radius: 0.2rem 0rem 0rem 0.2rem;
}

.form-row-input {
    border: 0.1rem solid black;
    border-radius: 0rem 0.2rem 0.2rem 0rem;
    width: 85%;
}
.newtask-close {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 16px;
    padding: 0 6px 2px 6px;
    color: #221c1d;
    border-radius: 50%;
    border: 1px solid rgb(32, 72, 119);
}

`

const Registration = () => {
    const setModalContent = useContext(ModalContext);
    const dispatch = useDispatch();
    const [UserName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const newUserAdd = (UserName, password, Birthday, City, email, userID) => {
        dispatch(newUserAdd(UserName, password, Birthday, City, email, userID))
    }
    return (
        <StyledRegistration>
        <React.Fragment>
            <div className={"modal"}>
                <Formik initialValues={{}}
                        onSubmit={(formData) => {
                            console.log("form submitted", formData)
                            registerUser(formData.Name, formData.password, formData.Birthday, formData.City,
                                formData.email, formData.userID)
                                .then(({data}) => {
                                    console.log(data);
                                    dispatch(newUserAdd(formData.Name, formData.password, formData.Birthday,
                                        formData.City, formData.email, formData.userID));
                                    history.push(PATHS.NEWS(data))
                                })
                        }}
                        validate={(formData) => {
                            const errorObj = {};
                            let isFormValid = true;

                            if(!formData.UserName) {
                                errorObj.UserName = ('Please input User Name');
                                isFormValid = false;
                            }
                            if (!formData.password) {
                                errorObj.password = ('Please input password');
                                isFormValid = false;
                            }
                            if (!formData.email) {
                                errorObj.email = ('Please input email');
                                isFormValid = false;
                            }
                            return isFormValid ? null: errorObj
                        }}>
                    <Form> <div className={"newtask-body"}>
                        <div className="newtask-content">
                        <button className={"newtask-close"} onClick={() => {setModalContent(false)}}>x</button>
                        <FormikInput className="form-row-label" placeholder={'UserName'} name={'UserName'}/>
                        <FormikInput className="form-row-label" placeholder={'Password'} name={'password'}/>
                        <FormikInput className="form-row-label" placeholder={'Birthday'} name={'Birthday'}/>
                        <FormikInput className="form-row-label" placeholder={'City'} name={'City'}/>
                        <FormikInput className="form-row-label" placeholder={'e-mail'} name={'email'}/>
                        <button type="submit">Submit</button>
                        </div>
                    </div>
                    </Form>
                </Formik>
            </div>
        </React.Fragment>
        </StyledRegistration>
    )
}

export default Registration