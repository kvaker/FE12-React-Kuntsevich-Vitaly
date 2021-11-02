import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Searchbutton from "/src/Assets/img/search-solid.svg"
import Infobutton from "/src/Assets/img/bell-regular.svg"
import Commentbutton from "/src/Assets/img/comment-alt-regular.svg"
import Gifttbutton from "/src/Assets/img/gift-solid.svg"
import img2 from "../../Assets/img/User 01.png";
import Registration from "/src/Components/Registration/Registration";
import FormikInput from "/src/Components/FormikInputs/FormikInput"

const StyledNavBarTop = styled.div `
    width: auto;
    height: 62px;
    color: #FFFFFF;
    margin: 0 25px 20px;
    position: relative;
    z-index: 0;
    
    .navbartop-area{
     display: flex;
     flex-direction: row;
     justify-content: flex-end;
    }
    .search-area {
    width: 400px;
    height: 45px;
    background: #F2EFF5;
    margin-top: 16px;
    margin-right: 180px;
    border-radius: 16px;
    }
    .search-area: cursor {
    width: 400px;
    height: 45px;
    background: #ffffff;
    }
    .search-button{
    width: 18px;
    height: 18px;
    color: #86878B;
    text-align: center;
    margin: 8px 350px;
    padding: 4px 16px;
    transition: 0.5s;
    cursor: pointer;
    }
    .Userinfo-buttons{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-right: 30px;
    }
    .info-button{
    width: 18px;
    height: 18px;
    color: #86878B;
    text-align: center;
    cursor: pointer;
    margin-top: 13px;
    }
    .info-button_background{
    width: 45px;
    height: 45px;
    background: #F2EFF5;
    border-radius: 15px;
    text-align: center;
    cursor: pointer;
    margin-top: 8px;
    margin-right: 30px;
    }
`

const NavBarTop = (props) => {
    return (
        <StyledNavBarTop>
            <div className={"navbartop-area"}>
            <div className={"search-area"} onChange={props.children}>
                <div className={"search-button"} onClick={props.children}>
                    <Searchbutton/>
                </div>
            </div>
                    <div className={"Userinfo-buttons"}>
                <div className={"info-button_background"} onClick={props.children}>
                    <Infobutton className={"info-button"}/> </div>
                    <div className={"info-button_background"} onClick={props.children}>
                        <Commentbutton className={"info-button"}/> </div>
                    <div className={"info-button_background"} onClick={props.children}>
                        <Gifttbutton className={"info-button"}/></div>
                        <div className="info-button_background"><img className="customers-content_icon" src={img2} alt="Jorge C"/>
                        </div>
                        <div className={"info-button"} onClick={props.field}>
                           Sign in  </div>
                </div>
            </div>
                    <div className={"content"}>
                        {props.children}
                    </div>
        </StyledNavBarTop>
    )
};

export default NavBarTop