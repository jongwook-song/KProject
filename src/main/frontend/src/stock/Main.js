import React from 'react';
import axios from 'axios';
import CalendarView from './calendar/CalendarView'
import NewsList from './content/NewsList'

/**
 * [J0005] 날짜 선택
*/

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date : null,
            newsList : null
        }
    }

    // [J0005] 날짜 선택 Start
    onDatePChange = date => {
        this.setState({
            date : date
        })
        console.log( "pdate : " + date);

        if (date !== "" && date.length>0) {
            axios.get("http://ec2-54-180-180-198.ap-northeast-2.compute.amazonaws.com:8080/search/news/"+date)
                .then( (res) => {
                    this.setState({ newsList: res.data });
                    console.log( res.data);
            });
        }
        else {
            this.setState({ newsList: [] });
        }

    };
    // [J0005] 날짜 선택 End

    onDataSave = () =>{
        axios.get("http://ec2-54-180-180-198.ap-northeast-2.compute.amazonaws.com:8080/save/news/")
            .then( (res) => {
        });
    }
    render() {
        return (
            <div className="main-div">
                <div className="kproject-head">
                    <h1 class="kproject-title">KProejct</h1>
                    <button className="cron-btn" onClick={(event) => {this.onDataSave()}} >뉴스 수집</button>
                </div>
                <div className="kproject-content">
                    <CalendarView onDatePChange={this.onDatePChange}/>
                    <NewsList date={this.state.date} newsList={this.state.newsList}/>
                </div>
            </div>
        );
    }
}

export default Main;