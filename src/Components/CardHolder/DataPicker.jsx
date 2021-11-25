import React from 'react';
import styled from 'styled-components';
import { Overlay } from 'react-overlay-pack';
import { DateTime as DT } from 'luxon';
import { CalendarDay } from '/src/Components/CardHolder/CalendarDay';

const DatePickerWrapper = styled.div`
  width: 130px;
  border: ${({ isDialogShown }) => (isDialogShown ? '#4285f4' : '#eee')} 2px
    solid;
  border-radius: 2px;
  padding: 0 5px;
  svg {
    color: ${({ isDialogShown }) => (isDialogShown ? '#4285f4' : '#eee')};
    width: 16px;
  }
  input {
    width: 100px;
    &:focus {
      outline: none;
    }
    border: none;
    font-size: 1.1em;
    padding: 0px 5px;
  }
`;

const Panel = styled.div`
  z-index: 3;
  width: 300px;
  background-color: #fff;
  border: 2px solid #eee;
  border-radius: 3px;
  padding: 15px;
`;

class DatePicker extends React.Component {
    inputRef = React.createRef();
    panelRef = React.createRef();
    state = {
        date: DT.fromJSDate(new Date()),
        dateString: DT.fromJSDate(new Date()).toFormat('yyyy-MM-dd'),
        isDialogShown: false,
    };
    onClickInput = e => {
        this.setState({ isDialogShown: true });
    };
    onHide = e => {
        if (e.target.dataset.dateItem) return;
        this.setState({ isDialogShown: false });
    };
    onSelect = date => {
        this.setState({
            date: DT.fromJSDate(date),
            dateString: DT.fromJSDate(date).toFormat('yyyy-MM-dd'),
            isDialogShown: false,
        });
    };
    onChangeInput = ({ target: { value } }) => {
        const { date: prevDate } = this.state;
        this.setState({
            dateString: value,
            date: DT.fromJSDate(value).isValid ? DT.fromJSDate(value) : prevDate,
        });
    };
    render() {
        const {
            inputRef,
            panelRef,
            onClickInput,
            onHide,
            onSelect,
            onChangeInput,
        } = this;
        const { date, dateString, isDialogShown } = this.state;
        return (
            <DatePickerWrapper isDialogShown={isDialogShown}>
                <CalendarAlt />
                <input
                    type="text"
                    ref={inputRef}
                    onClick={onClickInput}
                    value={dateString}
                    onChange={onChangeInput}
                />
                <Overlay
                    show={isDialogShown}
                    target={inputRef}
                    onOutsideClick={onHide}
                    resize
                    alignConfig={{ points: ['tl', 'bl'], targetOffset: [23, 8] }}
                    transitionConfig={{
                        style: { transform: 'translateY(-8px)' },
                        animation: { translateY: 10 },
                    }}
                >
                    <Panel ref={panelRef}>
                        <Calendar date={date.toJSDate()} onSelect={onSelect} />
                    </Panel>
                </Overlay>
            </DatePickerWrapper>
        );
    }
}

export default DatePicker;
