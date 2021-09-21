import React from "react";

class Card extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"board-card__item"}>
                <ul className="board-card__basic">
                    <li className="card-title"> <h4>Todo</h4>
             {`Tsk ${this.props.taskName}, is ${this.props.isDone ? "done" : "note done"}`}
                </li>
             </ul>
            </div>
        )
    }
}
export default Card