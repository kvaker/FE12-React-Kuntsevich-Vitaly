import React from "react";
import Registration from "../Components/Registration/Registration";
import {USER_ACTIONS} from "../Store/actionTypes";

const WithPermission = (props) => {
    const user = Registration(USER_ACTIONS);
    if (user && user.id && (!props.permissionName || user.permissions.includes(props.permissionName))) return props.children
    return null;
}

export default WithPermission