import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoDashboard from '/src/Assets/img/heartbeat-solid.svg';
import LogoWorkoutStatistic from '/src/Assets/img/signal-solid.svg';
import LogoWorkoutPlan from '/src/Assets/img/calendar-alt-regular.svg';
import LogoDistanceMap from '/src/Assets/img/bolt-solid.svg';
import LogoDiet from '/src/Assets/img/concierge-bell-solid.svg';
import LogoPersonalStat from '/src/Assets/img/chart-pie-solid.svg';
import NavBarLeft from "../Components/NavBars/NavBarLeft";
import NavBarTop from "../Components/NavBars/NavBarTop";

const StyledMainLayout = styled.div `
  .contentWithNavbar {
  display: flex;
  flex-direction: row;
  }
`

const MainLayout = (props) => {
    return (
        <StyledMainLayout> <NavBarLeft/>
            <NavBarTop/>
        <div className={"app"}>
            <div className={"contentWithNavbar"}>

            <div className={"content"}>
                {props.children}
            </div>

            </div>
        </div>
        </StyledMainLayout>
    )
};

export default MainLayout