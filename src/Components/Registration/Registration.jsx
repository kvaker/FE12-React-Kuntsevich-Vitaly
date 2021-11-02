import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Route } from "/src/Routing/Rout";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import FormikInput from "/src/Components/FormikInputs/FormikInput";

const Registration = () => {
    const dispatch = useDispatch();
    const [UserName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const newUser = (UserName, password, email) => {
        dispatch(newUserAdd(UserName, password, email))
    }
    return (
        <React.Fragment>
            <div className={"registration-form"}>
                <Formik initialValues={{}}
                        onSubmit={(formData) =>{}}
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
                    <Form>
                        <FormikInput placeholder={'UserName'} name={'UserName'}/>
                        <FormikInput name={'password'}/>
                        <FormikInput name={'email'}/>
                        <button type="submit">Submit</button>
                    </Form>
                </Formik>
            </div>
        </React.Fragment>
    )
}

export default Registration