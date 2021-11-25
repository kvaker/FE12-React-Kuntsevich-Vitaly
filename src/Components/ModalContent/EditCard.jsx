import React, {useEffect, memo, useContext, useRef, useState} from "react";
import styled from 'styled-components';
import { ModalContext } from "/src/HOC/GlobalModalProvider";
import { changeCard } from '/src/Store/actions/cardsList';
import { useDispatch } from "react-redux";

const StyledEditCardModal = styled.div`
       .modal {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    top: 0;
    left: 0;
    z-index: 1000;
    transition: top 0.4s, opacity 0.4s;
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


.task {
    background-color: white;
    margin: 0.2rem 0rem 0.3rem 0rem;
    border: 0.1rem solid black;
    border-radius: 0.2rem;
    padding: 0.5rem 0.2rem 0.5rem 2rem;
}

#task-button {
    margin: 0.2rem 0rem 0.1rem 0rem;
    background-color: white;
    border-radius: 0.2rem;
    width: 100%;
    border: 0.25rem solid black;
    padding: 0.5rem 2.7rem;
    border-radius: 0.3rem;
    font-size: 1rem;
}

.create-new-task-block {
    display: none;
    /* display: flex; */
    background: #ffaf00;
    width: 64.4%;
    flex-direction: column;
}

.form-row {
    display: flex;
    flex-direction: row;
    margin: 0.2rem;
}

.form-row-label {
    width: 15%;
    padding: 0.2rem;
    padding-right: 0.5rem;
    border: 0.1rem solid black;
    border-right: 0;
    border-radius: 0.2rem 0rem 0rem 0.2rem;
}

.form-row-input {
    border: 0.1rem solid black;
    border-radius: 0rem 0.2rem 0.2rem 0rem;
    width: 85%;
}

textarea {
    resize: none;
}

.form-row-buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0.2rem;
}

`

const EditCardModal = (props) => {
    const setModalContent = useContext(ModalContext);
    const [newTaskName, setNewTaskName] = useState('');
    const [newTaskDescription, setNewTaskDescription] = useState('');
    const dispatch = useDispatch();
    const { currentTaskName, currentTaskDescription, currentIndex } = props;
    return (
        <React.Fragment>
        <div className={"Card modal"}>
                                    <div className="newtask-body">
                    <div className="newtask-content">
                      <button className={"newtask-close"} onClick={() => {setModalContent(false)}}>x</button>
                        <strong>New Task</strong>
                         <div className="form-row">
                            <label className="form-row-label">Task</label>
                            <textarea className="form-row-input" type="text" name="task-name" id="task-name"
                                      defaultValue={currentTaskName}
                                      onChange={(event) => { setNewTaskName(event.target.value); }}/>
                            <div className="form-row">
                                <label className="form-row-label">Description</label>
                                <textarea className="form-row-input" name="task-description" id="task-description"
                                          cols="70" rows="10" defaultValue={currentTaskDescription}
                                          onChange={(event) => { setNewTaskDescription(event.target.value); }}/>
                                <button className="newtask-save" onClick={() => {
                                    if (newTaskName === '' && newTaskDescription === '') {
                                    } else if (newTaskName !== '' && newTaskDescription !== '') {
                                        dispatch(changeCard(currentIndex, newTaskName, newTaskDescription));
                                    } else if (newTaskDescription === '') {
                                        dispatch(changeCard(currentIndex, newTaskName, currentTaskDescription));
                                    } else {
                                        dispatch(changeCard(currentIndex, currentTaskName, newTaskDescription));
                                    }
                                    setModalContent(false);
                                }}>
                                    Save changes</button>
                                <button className="newtask-save" onClick={() => {
                                        setModalContent(false);
                                    }}> Cancel</button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
             </React.Fragment>
    )
}

export default memo(EditCardModal);