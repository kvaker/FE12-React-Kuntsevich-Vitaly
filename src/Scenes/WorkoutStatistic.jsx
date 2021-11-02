import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Route } from "/src/Routing/Rout";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Progress from "../Components/Progress";

const StyledWorkoutStatistic = styled.div`
   .StatisticBarChart {
   margin-left: 290px;
   display: flex;
   flex-direction: row;
   }
   .Chart-Bar{
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   margin-right: 30px;
   }
   .Running-Bar{
   width: 900px;
   height: 300px;
   background: #ffffff;
   border-radius: 8px;
   margin-bottom: 30px;
   }
   .Cycling-Bar{
   width: 900px;
   height: 300px;
   background: #ffffff;
   border-radius: 8px;
   margin-bottom: 30px;
   }
   .Yoga-Bar{
   width: 900px;
   height: 300px;
   background: #ffffff;
   border-radius: 8px;
   margin-bottom: 30px;
   }
   .Chart-Progress {
   display: flex;
   flex-direction: column;
   }
   .Button-AddMoreTraining {
   width: 270px;
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
   width: 270px;
   height: 400px;
   background: #ffffff;
   border-radius: 8px;
   margin-bottom: 30px;
   }
   .Chart-Stat{
   width: 270px;
   height: 300px;
   background: #ffffff;
   border-radius: 8px;
   }
`

const WorkoutStatistic = (props) => {
    const dispatch = useDispatch();

return (
<StyledWorkoutStatistic>
    {props.children}
    <section className={"StatisticBarChart"}>
    <div className={"Chart-Bar"}>
    <div className={"Running-Bar"}></div>
    <div className={"Cycling-Bar"}></div>
    <div className={"Yoga-Bar"}></div>
    </div>
    <div className={"Chart-Progress"}>
    <div className={"Button-AddMoreTraining"}>+Add more training</div>
    <div className={"Progress-Bar"}></div>
    <div className={"Chart-Stat"}></div>
    </div>
    </section>
    {/*<Progress/>*/}
</StyledWorkoutStatistic>
)
}
export default WorkoutStatistic