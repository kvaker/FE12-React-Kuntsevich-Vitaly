import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import heartbeatLogoHeader from '/src/Assets/img/heartbeat-solid.svg';
import img from '/src/Assets/img/health-indicators-medical-heart.png';
import img3 from '/src/Assets/img/grid 1.svg';

const StyledMainLayout = styled.div `
  .contentWithNavbar {
  display: flex;
  flex-direction: row;
  
  }
  .header {
  color: #0075FF;
  }
  
  .LogoApp {
    width: 100px;
    weight: 100px;
    color: #8b8b8b;
    margin: 30px;
    padding: 4px 8px;
  }
  
  .navBar {
    width: 260px;
    height: 1207px;
    background: #FFFFFF;
    margin-right: 20px;
    box-shadow: 0 2px 28px rgba(0, 0, 0, 0.1);
}
  .links-scene {
    height: 56px;
    display: flex;
    flex-direction: column;    
  }
  .link-button {
    padding-left: 40px;
    padding-top:  19px;
    padding-bottom: 19px;
  }
  .link-button:hover {
    background: linear-gradient(to right, #bbdaff, #FFFFFF);
    cursor: pointer;
  }
  .icon-links {
    width: 16px;
    height: 16px;
    text-align: center;
    margin-bottom: 8px;
    padding: 4px 8px;
    transition: 0.5s;
  }
`

const MainLayout = (props) => {
    return (
        <StyledMainLayout>
        <div className={"app"}>
            <div className={"contentWithNavbar"}>
                <div className={"navBar"}>
                    <img className="LogoApp" src={img} alt="Jorge C"/>
            <div className={"header"}>
                Fitness Tracker
                    <div className={"links-scene"}>
                <Link className={"link-button"} to={"/cards"}> <img className={"icon-links"} src={img3}/>
                    Workout Statistic
                    </Link>
                        <Link className={"link-button"} to={"/cards"}> <img className={"icon-links"} src={img3}/>
                            Workout Plan
                        </Link>
                        <Link className={"link-button"} to={"/cards"}> <img className={"icon-links"} src={img3}/>
                            Distance Map
                        </Link>
                        <Link className={"link-button"} to={"/cards"}> <img className={"icon-links"} src={img3}/>
                            Diet Food Menu
                        </Link>
                        <Link className={"link-button"} to={"/cards"}> <img className={"icon-links"} src={img3}/>
                            Personal Record
                        </Link>
                        <div className={"footer"}>
                        Footer
                    </div>
                    </div>
                </div>

            </div>
            <div className={"content"}>
                {props.children}
            </div>

            </div>
        </div>
        </StyledMainLayout>
    )
};

export default MainLayout