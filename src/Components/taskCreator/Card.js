import React, {useEffect, memo, useRef, Fragment} from "react";

const Card = (props) => {
    const secRef = useRef();

   useEffect( () => {
    return () => {
    console.log("by by", props.taskName);
    }
}, []);

   console.log(`card render`, props.taskName);

    return (
        <div className={"board-card__item"}>
            <ul className="board-card__basic">
                <li className="card-title">
                    {`Tsk ${props.taskName}, is ${props.isDone ? "done" : "note done"}`}
                    <div ref={secRef}></div>
                    <div className="button-version">
                        <button className={"button-version"} onClick={props.changeName(props.index)}>change name</button>
                        <button className={"button-version"} onClick={props.changeName(props.index)}>up</button>
                        <button className={"button-version"} onClick={props.changeName(props.index)}>down</button>
                        <button className={"button-version"} onClick={() => props.deleteCard(props.index)}>Delete</button>
                        {props.children}
                        <button className={"button-version"} onClick={() => {props.setIsModalOpen(
                            <React.Fragment>
                                <li className="card-title">
                                    {`Tsk ${props.taskName}, is ${props.isDone ? "done" : "note done"}`}
                                    <div ref={secRef}></div>
                                </li>
                                <button className={"button-version"} onClick={() => {props.setIsModalOpen(false)}}>
                                    close modal
                                </button>
                            </React.Fragment>
                        )}}>
                        open modal
                        </button>
                        <button className={"button-version"} onClick={() => {props.setIsModalOpen(false)}}>
                            close modal
                        </button>
                    </div>
                </li>



            </ul>
        </div>
    )
}

export default memo(Card);