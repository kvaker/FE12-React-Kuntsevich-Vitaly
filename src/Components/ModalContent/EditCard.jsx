import React, {useEffect, memo, useContext, useRef} from "react";
import styled from 'styled-components';
import { ModalContext } from "../../HOC/GlobalModalProvider";

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
          background-color: rgb(211, 208, 208);
          color: #221c1d;
          max-width: 30,5%;
          padding: 30px;
          border-radius: 4px;
          position: relative;
        }
`

const EditCardModal = (props) => {
    const setModalContent = useContext(ModalContext);
    return (
        <React.Fragment>
        <div className={"Card modal"}>
            {props.children}
                         <div className="newtask-body">
                    <div className="newtask-content">
                      <button className={"newtask-close"} onClick={() => {props.setIsModalOpen(false)}}>x</button>
                        <strong>New Task</strong>
                        <div className="form-row">
                            <label className="form-row-label">Task</label>
                            <input className="form-row-input" type="text" name="task-name" id="task-name"></input>
                            <div className="form-row">
                                <label className="form-row-label">Description</label>
                                <textarea className="form-row-input" name="task-description" id="task-description"
                                          cols="70" rows="10"></textarea>
                                <button className="newtask-save" onClick={() =>
                                {props.addTask()}}>Сохранить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             </React.Fragment>
    )
}

export default memo(EditCardModal);