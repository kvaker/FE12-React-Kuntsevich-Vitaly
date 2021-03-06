import React, {useContext} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoDashboard from '/src/Assets/img/heartbeat-solid.svg';
import LogoFitnessTracker from '/src/Assets/img/LogoFitnessTracker.svg';
import LogoWorkoutStatistic from '/src/Assets/img/signal-solid.svg';
import LogoWorkoutPlan from '/src/Assets/img/calendar-alt-regular.svg';
import LogoDistanceMap from '/src/Assets/img/bolt-solid.svg';
import LogoDiet from '/src/Assets/img/concierge-bell-solid.svg';
import LogoPersonalStat from '/src/Assets/img/chart-pie-solid.svg';
import LightThemeButton from '/src/Assets/img/sun-solid.svg';
import DarkThemeButton from '/src/Assets/img/moon-solid.svg';
import { ThemeContext } from "../../HOC/GlobalThemeProvider";

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
  .LogoFitnessTracker {
    width: 136px;
    weight: 136px;
    margin: 0px 80px 30px;
  }
  
  .navBar {
    width: 300px;
    height: 1180px;
    background: #FFFFFF;
    background-color: ${props => props.children === 1 ? "dark" : props.theme.BackgroundColor};
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
  .darkLightThemeOnOff {
    font-size: 15px;
    padding-left: 40px;
    padding-top:  19px;
    padding-bottom: 19px;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #707C97;
  }
   .switch input { display: none; /* ???????????? ???????????????? ???????????? */ }
   .switch label {
    display: inline-block; /* ??????????????-?????????????? ?????????????? */
    position: relative; /* ?????????????????????????? ???????????????????????????????? */
    margin: 20px;
    width: 60px; height: 30px; /* ?????????????? ?????????????????????????? */
    border-radius: 12px; /* ?????????????????????? */
    background: #9E9E9E; /* ?????????? ???????? ???????? */
    transition: 0.5s; /* ?????????? ?????????? ?????????? ???????? */
   }
   .switch label::before {
    content: '';
    position: absolute; /* ???????????????????? ???????????????????????????????? */
    background: #fff; /* ???????? ???????? ???????????? */
    width: 20px; height: 20px; /* ?????????????? ???????????? */
    border-radius: 12px; /* ?????????????????????? */
    left: 35px; top: 5px; /* ?????????????????? ???????????? */
    transition: 0.5s; /* ?????????? ???????????????? ???????????? */
   } 
   .switch input:checked + label {
    background: #0075FF; /* ?????????? ???????? ???????? */
   }
   .switch input:checked + label::before {
    left: 5px; /* ???????????? ?????????? */
   }
`

const NavBarLeft = (props) => {
    const setIsThemeDark = useContext(ThemeContext);
    return (
        <StyledNavBarLeft>
            <div className={"app"}>
                <div className={"contentWithNavbar"}>
                    <div className={"navBar"}>
                        <LogoDashboard className="LogoDashboard"/>
                        <div className={"header"}>
                            <LogoFitnessTracker className="LogoFitnessTracker"/>
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
                                <div className={"darkLightThemeOnOff"}>
                                <LightThemeButton className={"icon-links"} />
                                <div className="switch" onClick={() => {setIsThemeDark(true)}}>
                                        <input type="checkbox" id="switch"/>
                                            <label htmlFor="switch"></label>
                                    </div>
                                <DarkThemeButton className={"icon-links"} />
                                </div>
                                <div className={"footer"}>

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