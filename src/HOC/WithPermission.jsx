import React from "react";
import {USER_ACTIONS} from "../Store/actionTypes";
import {useSelector} from "react-redux";
import { store } from "../Store/initStore";
import { userReducer } from "/src/Store/reducers/userReducer"

const WithPermission = (props) => {
    const user = useSelector((store) => store.newUser);
    if (user && user.id && (!props.permissionName || user.permissions.includes(props.permissionName))) return props.children
    return null;
}

export default WithPermission