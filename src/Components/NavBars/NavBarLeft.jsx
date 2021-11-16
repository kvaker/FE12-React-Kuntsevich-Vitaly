import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoDashboard from '/src/Assets/img/heartbeat-solid.svg';
import LogoWorkoutStatistic from '/src/Assets/img/signal-solid.svg';
import LogoWorkoutPlan from '/src/Assets/img/calendar-alt-regular.svg';
import LogoDistanceMap from '/src/Assets/img/bolt-solid.svg';
import LogoDiet from '/src/Assets/img/concierge-bell-solid.svg';
import LogoPersonalStat from '/src/Assets/img/chart-pie-solid.svg';

const StyledNavBarLeft = styled.div `
  .contentWithNavbar {
  position: absolute;
  }
  .header {
  color: #0075FF;
  }
  
  .LogoDashboard {
    width: 76px;
    weight: 76px;
    color: #0075FF;
    margin: 30px;
    padding: 15px 80px;
  }
  
  .navBar {
    width: 300px;
    height: 1100px;
    background: #FFFFFF;
    margin-right: 30px;
    box-shadow: 0 2px 28px rgba(0, 0, 0, 0.1);
}
  .links-scene {
    height: 56px;
    display: flex;
    flex-direction: column;    
  }
  .link-button {
    font-size: 15px;
    padding-left: 40px;
    padding-top:  19px;
    padding-bottom: 19px;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #707C97;
  }
  .link-button:hover {
    background: linear-gradient(to right, #bbdaff, #FFFFFF);
    cursor: pointer;
  }
  .icon-links {
    width: 18px;
    height: 18px;
    text-align: center;
    margin-right: 8px;
    padding: 4px 8px;
    transition: 0.5s;
  }
  .LogoWorkoutStatistic {
    width: 96px;
    weight: 96px;
    color: #0075FF;
    margin: 30px;
    padding: 15px 45px;
  }
`

const NavBarLeft = (props) => {
    return (
        <StyledNavBarLeft>
            <div className={"app"}>
                <div className={"contentWithNavbar"}>
                    <div className={"navBar"}>
                        <LogoDashboard className="LogoDashboard"/>
                        <div className={"header"}>
                            Fitness Tracker
                            <div className={"links-scene"}>
                                <Link className={"link-button"} to={"/statistic"}> <LogoWorkoutStatistic className={"icon-links"} />
                                    Workout Statistic
                                </Link>
                                <Link className={"link-button"} to={"/cards"}> <LogoWorkoutPlan className={"icon-links"} />
                                    Workout Plan
                                </Link>
                                <Link className={"link-button"} to={"/cards"}> <LogoDistanceMap className={"icon-links"} />
                                    Distance Map
                                </Link>
                                <Link className={"link-button"} to={"/dietfoodmenu"}> <LogoDiet className={"icon-links"} />
                                    Diet Food Menu
                                </Link>
                                <Link className={"link-button"} to={"/cards"}> <LogoPersonalStat className={"icon-links"} />
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
        </StyledNavBarLeft>
    )
};

export default NavBarLeft