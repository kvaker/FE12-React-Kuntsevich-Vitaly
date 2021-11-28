import React, {useContext, useState} from "react";
import { useDispatch } from "react-redux";
import { Route } from "/src/Routing/Rout";
import { Link } from "react-router-dom";
import styled from "styled-components";
import RenderRunningAxisTick from "/src/Components/Grafics/LineChartRunning";
import RenderCyclingAxisTick from "/src/Components/Grafics/LineChartCycling";
import RenderYogaAxisTick from "/src/Components/Grafics/LineChartYoga";
import Runninginfo from "../Assets/img/running-solid.svg";
import Cyclinginfo from "../Assets/img/biking-solid.svg";
import Yogainfo from "../Assets/img/meditation-yoga.svg";
import Dropdownbutton from "../Assets/img/caret-down-solid.svg";
import {ThemeContext} from "../HOC/GlobalThemeProvider";

const StyledWorkoutStatistic = styled.div`
   background: ${props => props.children === 1 ? "dark" : props.theme.BackgroundColor};
   
   .StatisticBarChart {
   background-color: ${props => props.theme.componentBackgroundColor};
   margin-left: 360px;
   display: flex;
   flex-direction: row;
   }
   .Chart-Bar{
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   margin-right: 60px;
   }
   .Bar-Header {
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   justify-items: center;
   }
   .Bar-Title {
   display: flex;
   flex-direction: row;
   justify-content: flex-start;
   justify-items: center;
   }
   .Bar-Title-info {
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   justify-items: center;
   padding-top: 25px;
   margin-right: 690px;
   }
   .dropdown-area {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100px;
    height: 45px;
    background: #ffffff;
    border: #F2EFF5 solid 2px;
    margin-top: 16px;
    border-radius: 16px;
    }
    .dropdown-area: cursor {
    width: 400px;
    height: 45px;
    background: #ffffff;
    }
    .dropdown-button{
    width: 10px;
    height: 10px;
    color: #86878B;
    text-align: center;
    margin: 8px;
    padding: 6px 4px;
    transition: 0.5s;
    cursor: pointer;
    }
    .dropdown-choice {
    font-size: 14px;
    padding: 15px 7px;
    color: #86878B;
    }
   .Running-Bar{
   width: 1100px;
   height: 300px;
   background: #ffffff;
   border-radius: 8px;
   margin-bottom: 30px;
   }
   .running-info{
    width: 18px;
    height: 18px;
    color: #ffffff;
    text-align: center;
    cursor: pointer;
    margin-top: 13px;
    }
    .running-info_background{
    width: 45px;
    height: 45px;
    background: orange;
    border-radius: 15px;
    text-align: center;
    cursor: pointer;
    margin: 20px 30px 30px;
    }
   .Cycling-Bar{
   width: 1100px;
   height: 300px;
   background: #ffffff;
   border-radius: 8px;
   margin-bottom: 30px;
   }
   .cycling-info{
    width: 18px;
    height: 18px;
    color: #ffffff;
    text-align: center;
    cursor: pointer;
    margin-top: 13px;
    }
    .cycling-info_background{
    width: 45px;
    height: 45px;
    background: #0075FF;
    border-radius: 15px;
    text-align: center;
    cursor: pointer;
    margin: 20px 30px 30px;
    }
   .Yoga-Bar{
   width: 1100px;
   height: 300px;
   background: #ffffff;
   border-radius: 8px;
   margin-bottom: 30px;
   }
   .yoga-info{
    width: 18px;
    height: 18px;
    color: #ffffff;
    text-align: center;
    cursor: pointer;
    margin-top: 13px;
    }
    .yoga-info_background{
    width: 45px;
    height: 45px;
    background: #d30491;
    border-radius: 15px;
    text-align: center;
    cursor: pointer;
    margin: 20px 30px 30px;
    }
   .Chart-Progress {
   display: flex;
   flex-direction: column;
   }
   .Button-AddMoreTraining {
   width: 330px;
   height: 55px;
   background: #0075FF;
   border-radius: 8px;
   margin-bottom: 30px;
   cursor: pointer;
   color: #ffffff;
   text-align: center;
   padding: 30px 0px 0px;
   }
   .Progress-Bar{
   width: 330px;
   height: 400px;
   background: #ffffff;
   border-radius: 8px;
   margin-bottom: 30px;
   }
   .Chart-Stat{
   width: 330px;
   height: 300px;
   background: #ffffff;
   border-radius: 8px;
   }
`

const WorkoutStatistic = (props) => {
    const dispatch = useDispatch();
    const setIsThemeDark = useContext(ThemeContext);

return (
<StyledWorkoutStatistic>
    {props.children}
    <section className={"StatisticBarChart"}>
    <div className={"Chart-Bar"}>
    <div className={"Running-Bar"}>
        <div className={"Bar-Header"}>
        <div className={"Bar-Title"}>
        <div className={"running-info_background"}>
            <Runninginfo className={"running-info"}/> </div>
            <div className={"Bar-Title-info"}>
            <h2>Running</h2>
            <p>Your progress in this year</p>
            </div>
            <div className={"dropdown-area"} onChange={props.children}><p className={"dropdown-choice"}>Monyhly</p>
                <div className={"dropdown-button"} onClick={props.children}>
                    <Dropdownbutton/>
                </div>
            </div>
        </div>
        </div>
        <RenderRunningAxisTick payload/>
    </div>
    <div className={"Cycling-Bar"}>
        <div className={"Bar-Header"}>
            <div className={"Bar-Title"}>
                <div className={"cycling-info_background"}>
                    <Cyclinginfo className={"cycling-info"}/> </div>
                <div className={"Bar-Title-info"}>
                    <h2>Cycling</h2>
                    <p>Your progress in this year</p>
                </div>
                <div className={"dropdown-area"} onChange={props.children}><p className={"dropdown-choice"}>Monyhly</p>
                    <div className={"dropdown-button"} onClick={props.children}>
                        <Dropdownbutton/>
                    </div>
                </div>
            </div>
        </div>
        <RenderCyclingAxisTick payload/>
    </div>
    <div className={"Yoga-Bar"}>
        <div className={"Bar-Header"}>
            <div className={"Bar-Title"}>
                <div className={"yoga-info_background"}>
                    <Yogainfo className={"yoga-info"}/> </div>
                <div className={"Bar-Title-info"}>
                    <h2>Yoga</h2>
                    <p>Your progress in this year</p>
                </div>
                <div className={"dropdown-area"} onChange={props.children}><p className={"dropdown-choice"}>Monyhly</p>
                    <div className={"dropdown-button"} onClick={props.children}>
                        <Dropdownbutton/>
                    </div>
                </div>
            </div>
        </div>
        <RenderYogaAxisTick payload/>
    </div>
    </div>
    <div className={"Chart-Progress"}>
    <div className={"Button-AddMoreTraining"}>+Add more training</div>
    <div className={"Progress-Bar"}>
    </div>
    <div className={"Chart-Stat"}></div>
    </div>
    </section>
</StyledWorkoutStatistic>
)
}
export default WorkoutStatistic