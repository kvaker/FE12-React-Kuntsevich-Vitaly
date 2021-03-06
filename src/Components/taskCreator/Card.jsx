import React, {useEffect, memo, useRef, useContext} from "react";
import { ModalContext } from "../../HOC/GlobalModalProvider";
import { getCardDetailsRoute } from "Routing/routes";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import PenEditCard from '/src/Assets/img/pen-solid.svg';
import img2 from '/src/Assets/img/User 01.png';
import EditCard from "../ModalContent/EditCard";
import { useDispatch } from "react-redux";
import { toTopCard, toBottomCard, deleteCard, doneCard } from "/src/Store/actions/cardsList";
import Runninginfo from "/src/Assets/img/running-solid.svg";
import Cyclinginfo from "/src/Assets/img/biking-solid.svg";
import Yogainfo from "/src/Assets/img/meditation-yoga.svg";
import Sample from "../CardHolder/CalendarDay";

const StyledCard = styled.div`
background-color: ${props => props.children === 1 ? "dark" : props.theme.BackgroundColor};

.card-title{
    border-radius: 4px;
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: 600;
    padding: 16px;
    text-align: left;
    color: #000000;
}
.card-subtitle{
    font-size: 12px;
    font-weight: 600;
    color: #221C1D;
    text-align: left;
    margin-top: 3px;
    padding: 16px 16px;
}
.card-subsubtitle {
    font-size: 12px;
    font-weight: 600;
    text-align: left;
    color: #221C1D;
    font-weight: 700;
    margin-top: 3px;
    padding-bottom: 12px;
    padding-top: 12px;
    padding-left: 6px;
}
.card-text{
    text-align: center;
    color: #86878B;
    margin-top: 3px;
    padding-bottom: 20px;
    padding-top: 10px;
}
.card-title{
    background:#ffffff;
    position: relative;
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;

}
.card-subtitle {
    background:#ffffff;
    border-radius: 4px;
    position: relative;
    padding-bottom: 10px;
    margin-bottom: 16px;
    border-radius: 10px;
}
.card-navi {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
}
.card-subtitle_status {
    font-size: 10px;
    font-weight: 600;
    text-align: center;
    color: #221C1D;
    border: 0em;
    background-color: #B8EBB0;
    border-radius: 15px;
    margin-bottom: 8px;
    padding: 4px 8px;
}
.card-subtitle_status2 {
    font-size: 10px;
    font-weight: 600;
    text-align: center;
    color: #221C1D;
    border: 0em;
    background-color: #F0CA81;
    border-radius: 15px;
    margin-bottom: 8px;
    padding: 4px 8px;
}
.card-subtitle_status3 {
    font-size: 10px;
    font-weight: 600;
    text-align: center;
    color: #ffffff;
    border: 0em;
    background-color: orange;
    border-radius: 15px;
    margin-bottom: 8px;
    padding: 4px 8px;
}
.card-personal{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.button-version{
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: left;
    flex-wrap: wrap;
}
.card-subtitle_version1{
    width: 25px;
    height: 25px;
    text-align: center;
    color: #ffffff;
    border: 0em;
    background-color: orange;
    border-radius: 4px;
    margin-bottom: 8px;
    margin-right: 8px;
    padding: 4px;
}
.card-subtitle_version2{
    width: 25px;
    height: 25px;
    text-align: center;
    color: #ffffff;
    border: 0em;
    background-color: #0075FF;
    border-radius: 4px;
    margin-bottom: 8px;
    margin-right: 8px;
    padding: 4px;
}
.card-subtitle_version3{
    width: 25px;
    height: 25px;
    text-align: center;
    color: #ffffff;
    border: 0em;
    background-color: #d30491;
    border-radius: 4px;
    margin-bottom: 8px;
    margin-right: 8px;
    padding: 4px;
}
.subtitle-date{
    font-size: 11px;
    font-weight: 500;
    text-align: left;
    color: #666666;
    margin-bottom: 8px;
}
.icon-container{
    display: flex;
    flex-direction: row;
    justify-content:flex-end;
}
.customers-icon {
    width: 32px;
    height: 32px;
    overflow: hidden;
    border-radius: 50%;
    margin: 0 5px;
}
.customers-content_icon {
    width: 100%;  
    height: auto;
    justify-content: center;
    align-items: center;
}
.card-subsubtitle {
    height: 161px;
    background:#ffffff;
    border: solid 1px #666666;
    border-radius: 4px;
    position: relative;
    padding-bottom: 10px;
}
.card-text {
    font-size: 12px;
    font-weight: 600;
    text-align: left;
    color: #221C1D;
    position: relative;
    padding-bottom: 10px;
}
.card-subtitle:hover {
    text-align: left;
    background:#d5e4fc;
    color: #000000;
    position: relative;
    font-weight: 700;
}
.card-add{
    border: none;
    font-size: 12px;
    font-weight: 600;
    text-align: left;
    color: #221C1D;
    position: relative;
    padding:0 16px;
    margin-bottom: 16px;
}
.board-card_editCard {
    width: 17px;
    weight: 17px;
    text-align: center;
    background: none;
    color: #8b8b8b;
    border: 0em;
    border-radius: 10px;
    margin-bottom: 8px;
    padding: 4px 8px;
    transition: 0.5s;
  }
  
  .board-card_editCard:hover {
    background-color: rgb(32, 72, 119);
    color: #fff;
  }

`


const Card = (props) => {
    const setModalContent = useContext(ModalContext);
    const dispatch = useDispatch();
    const {
        children, changeTask, taskName, isDone, index, taskDescription, state,
    } = props;

   useEffect( () => {
    return () => {
    console.log("by by", props.taskName);
    }
}, []);

   console.log(`card render`, props.taskName);

    return (
        <StyledCard isDone={props.isDone}>
            <div className="board-card__basic">
                  <div className="card-subtitle" id="card_user1">
                    <div className="card-navi">
                        <button className="card-subtitle_status">Low</button>
                        {props.children}
                        <div onClick={() => { setModalContent(
                            <EditCard
                                currentTaskName={taskName}
                                currentTaskDescription={taskDescription}
                                currentIndex={index}
                                changeName={changeTask}
                            />,
                        );
                        }}
                             className="edit-btn"
                        >
                            <PenEditCard className={"board-card_editCard"}/>
                        </div>
                        </div>
                    <p className="card-text">{props.taskName}</p>
                      <p className="card-text">{props.taskDescription}</p>
                    <div className={"card-personal"}>
                      <div className="button-version">
                        <button className="card-subtitle_version1"><Runninginfo/></button>
                        <button className="card-subtitle_version2"><Cyclinginfo/></button>
                        <button className="card-subtitle_version3"><Yogainfo/></button>
                      </div>
                    <span
                        className="subtitle-date">{props.taskName.Date === 0 ? '' : props.taskName.Date}</span>
                    <div className="icon-container">
                        <div className="customers-icon"><img className="customers-content_icon" src={img2} alt="Jorge C"/>
                        </div>
                        </div>
                    </div>
                    <div className="button-version">
                        <button className={"button-version"} onClick={() => { dispatch(toTopCard(index));}}>Up</button>
                        <button className={"button-version"} onClick={() => { dispatch(toBottomCard(index)); }}
                        >Down</button>
                        <button className={"button-version"} onClick={() => { dispatch(deleteCard(index)); }}
                        >Delete</button>
                        <button className={"button-version"} onClick={() => { dispatch(doneCard(index)); }}
                        >To Done</button>
                        {props.children}
                                           </div>
                    </div>
            </div>
         </StyledCard>
    )
}

export default memo(Card);