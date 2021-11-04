import React, { useState } from 'react';
import Calendar from 'react-calendar'
import styled from "styled-components";

const StiledSample = styled.div`
.Sample .react-calendar {
  max-width: 100%;
  background: white;
  border-radius: 8px;
  font-family: Montserrat, sans-serif;
  line-height: 1.125em;
}
 .Sample .react-calendar--doubleView {
  width: 700px;
}
 .Sample .react-calendar--doubleView .react-calendar__viewContainer {
  display: flex;
  margin: -0.5em;
}
 .Sample .react-calendar--doubleView .react-calendar__viewContainer > * {
  width: 50%;
  margin: .5em;
}
 .Sample .react-calendar, .Sample .react-calendar *, .Sample .react-calendar *:before, .Sample .react-calendar *:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
 .Sample .react-calendar button {
  margin: 0;
  border: 0;
  outline: none;
}
 .Sample .react-calendar button:enabled:hover {
  cursor: pointer;
}
 .Sample .react-calendar__navigation {
  display: flex;
  height: 44px;
  margin-bottom: 1em;
}
 .Sample .react-calendar__navigation button {
  min-width: 44px;
  background: none;
}
 .Sample .react-calendar__navigation button:disabled {
  background-color: #f0f0f0;
}
 .Sample .react-calendar__navigation button:enabled:hover, .Sample .react-calendar__navigation button:enabled:focus {
  background-color: #e6e6e6;
}
 .Sample .react-calendar__month-view__weekdays {
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: .75em;
}
 .Sample .react-calendar__month-view__weekdays__weekday {
  padding: .5em;
}
 .Sample .react-calendar__month-view__weekNumbers .react-calendar__tile {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: .75em;
  font-weight: bold;
}
 .Sample .react-calendar__month-view__days__day--weekend {
  color: #d10000;
}
 .Sample .react-calendar__month-view__days__day--neighboringMonth {
  color: #757575;
}
 .Sample .react-calendar__year-view .react-calendar__tile, .Sample .react-calendar__decade-view .react-calendar__tile, .Sample .react-calendar__century-view .react-calendar__tile {
  padding: 2em .5em;
}
 .Sample .react-calendar__tile {
  max-width: 100%;
  padding: 10px 6.6667px;
  background: none;
  text-align: center;
  line-height: 16px;
}
 .Sample .react-calendar__tile:disabled {
  background-color: #f0f0f0;
}
 .Sample .react-calendar__tile:enabled:hover, .Sample .react-calendar__tile:enabled:focus {
  background-color: #e6e6e6;
}
 .Sample .react-calendar__tile--now {
  background: #ffff76;
}
 .Sample .react-calendar__tile--now:enabled:hover, .Sample .react-calendar__tile--now:enabled:focus {
  background: #ffffa9;
}
 .Sample .react-calendar__tile--hasActive {
  background: #76bbff;
}
 .Sample .react-calendar__tile--hasActive:enabled:hover, .Sample .react-calendar__tile--hasActive:enabled:focus {
  background: #a9d4ff;
}
 .Sample .react-calendar__tile--active {
  background: #006edc;
  color: white;
}
 .Sample .react-calendar__tile--active:enabled:hover, .Sample .react-calendar__tile--active:enabled:focus {
  background: #1088ff;
}
 .Sample .react-calendar--selectRange .react-calendar__tile--hover {
  background-color: #e6e6e6;
}
 .NextWeekPlan {
  width: 100%;
  max-height: 100%;
  background: white;
}
`

export default function Sample() {
    const [value, onChange] = useState(new Date());

    return (
        <StiledSample>
        <div className="Sample">
            <div className="Sample__container">
                <main className="Sample__container__content">
                    <Calendar
                        onChange={onChange}
                        showWeekNumbers
                        value={value}
                    />
                </main>
            </div>
            <div className={"NextWeekPlan"}></div>
        </div>
        </StiledSample>
    );
}
