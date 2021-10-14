import React, {useEffect, useContext, useCallback, useState} from "react";
import CardHolder from "./CardHolder";
import Card from "../taskCreator/Card";
import styled from "styled-components";
import {TASK_STATUS} from "../../Constants/tasksStatus";


const StyledCardColumn = styled.div`
.container-wrap-board{
  background-color: #E4E9F1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    align-items: flex-start;
}
.board-card__item {
  background-color: #F2EFF5;
    width: 298px;
    margin: 20px 15px;
    }
    .board-card__basic{
         font-size: 16px;
        font-weight: 600;
        text-align: left;
        width: 266px;
        margin: 16px;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
         } 
`

const CardColumn = (props) => {
    const [newTaskName, setNewTaskName] = useState('');
    const [newTaskDescription, setNewTaskDescription] = useState('');

    return (
        <StyledCardColumn>

                <div className="container-wrap-board">
                    <div className="board-card__item">
                        <div className="board-card__basic">
                            <div className="card-title">

                            <h2>
                    {props.title}
                </h2>
                            </div>
            </div>
            {props.children}
            <div className={"card"}>
                <input onChange={(event) =>
                {setNewTaskName(event.target.value)}} value={newTaskName} className={'usercard-title'} placeholder={'Your task name'}/>
                <button className={"add-btn"} onClick={() => props.addTask(TASK_STATUS.toDo)}>Add new Task</button>
                  </div>
                </div>
                </div>

        </StyledCardColumn>
    )
}

export default CardColumn;