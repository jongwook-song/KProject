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
            newsList : null,
            searchText : null,
            pageInfo : { currentPage : 0,
                        totalElements : -1,
                        totalPages : -1}
        }
    }

    // [J0005] 날짜 선택 Start
    onDatePChange = date => {
        this.setState({
            date : date
        })

        let newsListRequestDto = new Object();
        newsListRequestDto.searchdate = date;
        newsListRequestDto.currentPage = 0;

        if (date !== "" && date.length>0) {
            axios.post("http://ec2-54-180-180-198.ap-northeast-2.compute.amazonaws.com:8080/search/news", newsListRequestDto)
//            axios.post("http://127.0.0.1:8080/search/news/", newsListRequestDto)
                .then( (res) => {
                    console.log(res.data);
                    this.setState({ newsList: res.data.content,
                                    pageInfo : {currentPage : res.data.pageable.pageNumber,
                                                totalElements : res.data.totalElements,
                                                totalPages : res.data.totalPages
                                            }
                                    });
            });
        }
        else {
            this.setState({ newsList: [],
                            pageInfo : {currentPage : 0,
                                        totalElements : -1,
                                        totalPages : -1
                                        }
                            });
        }
    };
    // [J0005] 날짜 선택 End

    updatePage = ( currentPage) =>{
        this.setState({ pageInfo : {currentPage : currentPage}});

        let newsListRequestDto = new Object();
        newsListRequestDto.searchdate = this.state.date;
        newsListRequestDto.currentPage = currentPage;

        if( this.state.searchText === null || this.state.searchText.length<1){
            axios.post("http://ec2-54-180-180-198.ap-northeast-2.compute.amazonaws.com:8080/search/news", newsListRequestDto)
//            axios.post("http://127.0.0.1:8080/search/news/", newsListRequestDto)
                .then( (res) => {
                    this.setState({ newsList: res.data.content,
                                    pageInfo : {currentPage : res.data.pageable.pageNumber,
                                                totalElements : res.data.totalElements,
                                                totalPages : res.data.totalPages
                                            }
                                    });
            });
        }
        else{
            newsListRequestDto.searchText = this.state.searchText;
            axios.post("http://ec2-54-180-180-198.ap-northeast-2.compute.amazonaws.com:8080/search/newsdetail/", newsListRequestDto)
//            axios.post("http://127.0.0.1:8080/search/newsdetail/", newsListRequestDto)
                .then( (res) => {
                    this.setState({ newsList: res.data.content,
                                    pageInfo : {currentPage : res.data.pageable.pageNumber,
                                                totalElements : res.data.totalElements,
                                                totalPages : res.data.totalPages
                                                }
                                    });
            });
        }



    }

    onSearchBtn = searchText => {
        this.setState({
            searchText : searchText
        })

        let newsListRequestDto = new Object();
        newsListRequestDto.searchdate = this.state.date;
        newsListRequestDto.searchText = searchText;
        newsListRequestDto.currentPage = 0;

        if (newsListRequestDto !== "" ) {
            axios.get("http://ec2-54-180-180-198.ap-northeast-2.compute.amazonaws.com:8080/search/newsdetail/", newsListRequestDto)
//            axios.post("http://127.0.0.1:8080/search/newsdetail/", newsListRequestDto)
                .then( (res) => {
                    console.log(res);
                    this.setState({ newsList: res.data.content,
                                    pageInfo : {currentPage : res.data.pageable.pageNumber,
                                                totalElements : res.data.totalElements,
                                                totalPages : res.data.totalPages
                                                }
                                    });
            });
        }
        else {
            this.setState({ newsList: [],
                            pageInfo : {currentPage :0,
                                        totalElements : -1,
                                        totalPages : -1
                                        }
                            });
        }
    }

    render() {
        return (
            <div className="main-div">
                <div className="kproject-head">
                    <h1 className="kproject-title">KProejct</h1>
                </div>
                <div className="kproject-content">
                    <CalendarView onDatePChange={this.onDatePChange}/>
                    <NewsList date={this.state.date} onSearchBtn={this.onSearchBtn} newsList={this.state.newsList}
                            pageInfo={this.state.pageInfo} updatePage={this.updatePage}/>
                </div>
            </div>
        );
    }
}

export default Main;