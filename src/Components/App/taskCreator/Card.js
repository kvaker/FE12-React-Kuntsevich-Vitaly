import React from "react";

class Card extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"board-card__item"}>
                <ul className="board-card__basic">
                    <li className="card-title">
                        {`Tsk ${this.props.taskName}, is ${this.props.isDone ? "done" : "note done"}`}
                        <div className="button-version">
                            <button className="button-version" onClick={this.props.changeName(this.props.index)}>change name</button>
                            <button className="button-version" onClick={this.props.changeName(this.props.index)}>up</button>
                            <button className="button-version" onClick={this.props.changeName(this.props.index)}>down</button>
                            <button className="button-version" onClick={() => this.props.removeItem(index)}>Remove</button>
                        </div>
                    </li>



                </ul>
                            </div>
        )
    }
}
export default Card