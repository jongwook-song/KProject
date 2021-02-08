import React from 'react';
import Calendar from 'react-calendar'
import moment from 'moment';
import 'react-calendar/dist/Calendar.css';
import './css/Calendar.css';

/**
 * [J0005] 날짜 선택
*/

class CalendarView extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            date : new Date()
        }
    }

    // [J0005] 날짜 선택 Start
    onDateChange = date => {
        const tDate = moment(date).format("YYYY.MM.DD");

        this.setState({
            date : tDate
        })
        this.props.onDatePChange( tDate);
    };
    // [J0005] 날짜 선택 End
// value={this.state.date}
    render() {
        return (
            <div className="calender-div">
                <Calendar onChange={this.onDateChange}/>
            </div>

        );
    }
}

export default CalendarView;