import React, {useContext, useEffect, useState } from "react";
import styled from "styled-components";
import img2 from '/src/Assets/img/User 01.png';
import {useDispatch, useSelector} from "react-redux";
import {ThemeContext} from "../../HOC/GlobalThemeProvider";
import {userSelector} from "../../Store/actions/user";

const StyledUserList = styled.div`
   .my-profile-container {
   width: 310px;
   height: 95px;
   background: #E4E9F1;
   background-color: ${props => props.children === 1 ? "dark" : props.theme.BackgroundColor};
   border-radius: 8px;
   margin: 10px;
   display: flex;
   flex-direction: row;
   }
   .profile-item {
   display: inline-block;
   }
   .my-profile {
    &-photo {
      text-align: center;
      margin: 10px 20px;
    }

    &-photo_img {
      width: 50px;
    }

    &-item {
      margin: 10px 5px;
    }

    &-title {
      font-size: 15px;
      font-weight: 600;
      margin-bottom: 10px;
      color: #86878B;
    }

    &-userdata {
      font-size: 12px;
    }
  }
`

const UserList = (props) => {
    const dispatch = useDispatch();
    const setIsThemeDark = useContext(ThemeContext);
    const newUser = useSelector(userSelector);
    const [user, setUser] = useState('')

    useEffect(() => {
        new Promise((resolve, reject) => {
            resolve(
                newUser
            )
        }).then((data) => {
            if (data.name) {
                setUser(data);
            }
        })}, []);

    return (
        <StyledUserList>
            <div className="my-profile-container">
                <div className="my-profile-photo">
                    <img src={img2} alt="user" className="my-profile-photo_img" />
                </div>
                <div className={"profile-item"}>
                    <div className="my-profile-item">
                        <p className="my-profile-title">Name:</p>
                        <p className="my-profile-userdata">{user.name}</p>
                    </div>
                    <div className="my-profile-item">
                        <p className="my-profile-title">Surname:</p>
                        <p className="my-profile-userdata">{user.firstName}</p>
                    </div>
                    <div className="my-profile-item">
                        <p className="my-profile-title">Birthday:</p>
                        <p className="my-profile-userdata">{user.birthday}</p>
                    </div>
                </div>
            </div>
        </StyledUserList>
    )
}
export default UserList;