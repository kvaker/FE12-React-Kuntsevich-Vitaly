import React, {useEffect, useContext, useCallback, useState} from "react";
import Card from "../taskCreator/Card"
import { ModalContext } from "HOC/GlobalModalProvider";
import { Link } from "react-router-dom";
import { TASK_STATUS } from "../../Constants/tasksStatus";
import styled from "styled-components";
import CardColumn from "./CardColumn";
import { cardListSelector } from "../../Store/selectors/cardsList";
import { useDispatch, useSelector } from "react-redux";
import { changeName, newCard } from "../../Store/actions/cardsList";

const StyledCardHolder = styled.div`
display: flex;
flex-wrap: nowrap;
justify-content: center;
align-items: flex-start;

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
        width: 266px;
        margin: 16px;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
         } 

         .board-card_addNewCard {
          display: block;
          color: #000000;
          font-size: 12px;
          line-height: 18px;
          background-color: #E4E9F1;
          border-radius: 4px;
          padding: 8px;
          transition: 0.5s;
        }
        
        .board-card_addNewCard:hover {
          background-color: rgb(32, 72, 119);
          color: #fff;
        }
        
        .newtask {
          position: fixed;
          height: 100%;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.8);
          top: 0;
          left: 0;
          opacity: 0;
          visibility: hidden;
          transition: top 0.4s, opacity 0.4s;
        }
        
        .newtask-open {
          opacity: 1;
          visibility: visible;
        }
        
        .newtask-body {
          min-height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 30px 10px;
        }
        
        .newtask-content {
          background-color: rgb(211, 208, 208);
          color: #221c1d;
          max-width: 30,5%;
          padding: 30px;
          border-radius: 4px;
          position: relative;
        }
        
        .newtask-close {
          position: absolute;
          right: 10px;
          top: 10px;
          font-size: 16px;
          padding: 0 6px 2px 6px;
          color: #221c1d;
          border-radius: 50%;
          border: 1px solid rgb(32, 72, 119);
        }
        
        .newtask-title,
        .newtask-description {
          margin-bottom: 15px;
        }
        
        #newtask-title_in,
        #newtask-description_in {
          display: block;
          border: none;
          background-color: rgba(206, 229, 255, 0.9);
          border-radius: 4px;
          font-size: 12px;
          line-height: 18px;
          padding: 7px;
        }
        
        .newtask-title_p,
        .newtask-description_p {
          margin-bottom: 10px;
        }
        
        .newtask-save {
          width: 100%;
          background-color: rgb(32, 72, 119);
          border-radius: 4px;
          padding: 8px;
          border: none;
          color: #fff;
          cursor: pointer;
          transition: 0.4s;
        }
        
        .newtask-save:hover {
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25);
        }
`

const CardHolder = (props) => {
    const taskList = useSelector(cardListSelector);
    const dispatch = useDispatch();
    const [newTaskName, setNewTaskName] = useState('');
    const [newTaskDescription, setNewTaskDescription] = useState('');
    const setModalContext = useContext(ModalContext);

    useEffect(() => {
        console.log('use effect');
        new Promise((resolve, reject) => {
            resolve([
                { taskName: 'task 1', taskDescription: 'Define more tags in components.', isDone: false, userName: 'Jon', state: TASK_STATUS.pending },
                { taskName: 'task 2', taskDescription: 'Add more user avatars.', isDone: true, userName: 'Jack', state: TASK_STATUS.progress },
                { taskName: "Task 3", isDone: true, taskDescription: "Task 3 description", state: TASK_STATUS.done },
            ]);
        }).then((data) => {
        });
        return () => {
            console.log('bue');
        };
    }, []);

    const addTask = (newTaskName, newTaskDescription, newTaskUser, state) => {
        dispatch(newCard(newTaskName, newTaskDescription, newTaskUser, state));
        setNewTaskName('');
        setNewTaskDescription('');
    }

    const deleteCard = (index) => {
        let newTaskList = [...taskList];
        newTaskList.splice(index, 1);
        setTaskList(newTaskList);
    }

   const changeName = useCallback((index) => () => {
        let newTaskList = [...taskList];
        newTaskList[index].taskName = "New";
       setTaskList(newTaskList);
   }, [taskList]);

    const taskDone = (index) => {
        let newTaskList = [...taskList];
        newTaskList[index].isDone = true;
        newTaskList[index].state = TASK_STATUS.done;
        setTaskList(newTaskList);
       };

    return (
        <StyledCardHolder>
            <CardColumn title={"Todo"} addTask={addTask}>
                  {taskList.map((task, index) => {
                    if (task.state === TASK_STATUS.toDo) {
                        return (
                            <div key={task.taskName}>
                                <Card setIsModalOpen={setModalContext} taskName={task.taskName}
                                      taskDescription={task.taskDescription}
                                      userName={task.userName}
                                      state={task.state}
                                      isDone={task.isDone} index={index} changeName={changeName}
                                      addTask={addTask} deleteCard={deleteCard}/>
                            </div>
                        )
                    }
                })}
               </CardColumn>
            <CardColumn title={"InProgress"} addTask={addTask}>
                {taskList.map((task, index) => {
                    if (task.state === TASK_STATUS.progress) {
                        return (
                            <div key={task.taskName}>
                                <Card setIsModalOpen={setModalContext} taskName={task.taskName}
                                      taskDescription={task.taskDescription}
                                      userName={task.userName}
                                      state={task.state}
                                      isDone={task.isDone} index={index} changeName={changeName}
                                      addTask={addTask} deleteCard={deleteCard}/>
                            </div>
                        )
                    }
                })}
            </CardColumn>
            <CardColumn title={"Done"} addTask={addTask}>
                {taskList.map((task, index) => {
                    if (task.state === TASK_STATUS.done) {
                        return (
                            <div key={task.taskName}>
                                <Card setIsModalOpen={setModalContext} taskName={task.taskName}
                                      taskDescription={task.taskDescription}
                                      userName={task.userName}
                                      state={task.state}
                                      isDone={task.isDone} index={index} changeName={changeName}
                                      addTask={addTask} deleteCard={deleteCard}/>
                            </div>
                        )
                    }
                })}
            </CardColumn>
                          </StyledCardHolder>
    )

}

export default CardHolder;