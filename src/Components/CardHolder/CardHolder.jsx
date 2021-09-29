import React, {useEffect, useContext, useCallback, useState} from "react";
import Card from "../taskCreator/Card"
import 'styles/style.css';
import { ModalContext } from "HOC/GlobalModalProvider";
import { Link } from "react-router-dom";

const CardHolder = (props) => {
    const [taskList, setTaskList] = useState([]);
    const [newTaskName, setNewTaskName] = useState('');
    const setModalContext = useContext(ModalContext);

    useEffect(() => {
            new Promise((resolve, reject) => {
            resolve([{taskName: "task 0", isDone: false}, {taskName: "task 1", isDone: false}])
        }).then((data) => {
                setTaskList(data)

        }).catch()
    }, []);

    const addTask = () => {
        let newTaskList = [...taskList];
        newTaskList.push({taskName: `task ${taskList.length}`, isDone: false});
        setTaskList(newTaskList);
    }

    const deleteCard = (index) => {
        let newTaskList = [...taskList];
        newTaskList.splice(index, index + 1);
        setTaskList(newTaskList);
    }

   const changeName = useCallback((index) => () => {
        let newTaskList = [...taskList];
        newTaskList[index].taskName = "New";
       setTaskList(newTaskList);
   }, [taskList]);

    return (
        <section className='section-board'>
            <div className='container-container-board'>
                <div className="container-wrap-board">
                    <div className="board-card__item"><h4>Todo</h4>
                        {taskList.map((task, index) => {
                            return (
                                <div key={task.taskName}>
                                    <Card setIsModalOpen={setModalContext} taskName={task.taskName} isDone={task.isDone} index={index} changeName={changeName} deleteCard={deleteCard}/>
                                </div>
                            )
                        })}
                        <button className={"board-card_addNewCard newtask-link"} onClick={addTask}>add task</button>
                        <button className={"board-card_addNewCard newtask-link"} onClick={() => {setModalContext(
                            <button className={"board-card_addNewCard newtask-link"} onClick={addTask}>add task</button>
                        )}}>open modal</button>
                    </div>
                                    </div>
            </div>
        </section>
    )

}

export default CardHolder;