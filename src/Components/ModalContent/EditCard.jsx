import React, {useEffect, memo, useContext, useRef, useState} from "react";
import styled from 'styled-components';
import { ModalContext } from "/src/HOC/GlobalModalProvider";
import { changeCard } from '/src/Store/actions/cardsList';
import { useDispatch } from "react-redux";

const StyledEditCardModal = styled.div`
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
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex-wrap: wrap;
          background-color: rgb(211, 208, 208);
          color: #221c1d;
          max-width: 30,5%;
          padding: 30px;
          border-radius: 4px;
          position: relative;
        }
        .form-row {
    display: flex;
    flex-direction: column;
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