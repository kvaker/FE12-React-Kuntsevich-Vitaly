import React, {Component} from "react";
import Card from "../taskCreator/Card"
import '../../styles/style.css';

class CardHolder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskList: [{taskName: "task 0", isDone: false}, {taskName: "task 1", isDone: false}]
        }
    }
    componentDidMount() {
        new Promise((resolve, reject) => {
            resolve([{taskName: "task 0", isDone: false}, {taskName: "task 1", isDone: false}])
        }).then((data) => {
            this.setState({taskList:data})

        }).catch()
    }

    addTask = () => {
        let newTaskList = [...this.state.taskList];
        newTaskList.push({taskName: `task ${this.state.taskList.length}`, isDone: false});
        this.setState({taskList: newTaskList});
    }
    deleteCard = (index) => {
        let newTaskList = [...this.state.taskList];
        let postDeleteTaskList = newTaskList.splice(index, index + 1);
        this.setState({taskList: postDeleteTaskList});
    }
    changeName = (index) => () => {
        let newTaskList = [...this.state.taskList];
        newTaskList[index].taskName = "New";
        this.setState({taskList: newTaskList});
    }

    render() {
        return (
            <section className='section-board'>
                <div className='container-container-board'>
                    <div className="container-wrap-board">
                        <div className="board-card__item"><h4>Todo</h4>
                {this.state.taskList.map((task, index) => {
                    return (
                        <div key={task.taskName}>
                        <Card taskName={task.taskName} isDone={task.isDone} index={index} changeName={this.changeName} deleteCard={this.deleteCard}/>
                        </div>
                )
                })}
              <button className="board-card_addNewCard newtask-link" onClick={this.addTask}>add task</button>
                         </div>
                        </div>
                </div>
            </section>
    )

    }
}
export default CardHolder;