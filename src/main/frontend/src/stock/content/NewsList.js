import React from 'react';
import './css/News.css'
import {ListGroup} from 'react-bootstrap';
class NewsList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchText : null
        }
    }

    onSearchBtn = () =>{
        this.props.onSearchBtn( this.state.searchText);
    }

    onSearch = event => {
        this.setState({ [event.target.name]:event.target.value});
    };

    updatePage = ( currentPage) =>{
        this.props.updatePage( currentPage);
    }

    render() {
        const newsList = this.props.newsList;

        let pageTmp = Math.floor(this.props.pageInfo.currentPage/10)*10;
        let pageNum = [];
        let currentPage = this.props.pageInfo.currentPage;
        let pagePreBtn = -1;
        let pageNextBtn = -1;

        for( var i=pageTmp; i<pageTmp+10 && i<this.props.pageInfo.totalPages; i++){
            pageNum.push( i);
        }

        if( pageNum.length<1 || pageNum[0] === 0){
            pagePreBtn=-1;
        }
        else{
            pagePreBtn = (pageNum[0]-1);
        }

        if( pageNum === 10 && pageNum[pageNum.length-1] < this.props.pageInfo.totalPages){
            pageNextBtn=( pageNum[pageNum.length-1] + 1);
        }
        else{
            pageNextBtn=-1;
        }


        return (
            <div className="new-list-div">
                { this.props.date !== null ?
                <div className="search-div">
                    <input type="text" name="searchText" className="search-detail" onChange={this.onSearch}/>
                    <button className="search-btn" onClick={(event) => {this.onSearchBtn()}} >검색</button>
                </div>
                :
                null
                }
                { newsList !== null ?
                    <div className="news-div">
                        { newsList.map((news, index, arrNews) =>
                        <div key={news.id} className={index === arrNews.length-1 ? 'news-content last' : 'news-content'}>
                            <div className="news-content-info">
                                <div className="news-title" onClick={() => window.open([news.url],'_blank')}>
                                    <span>{news.title}</span>
                                </div>
                                <div>
                                    <span>{news.content}</span>
                                </div>
                            </div>
                        </div>
                        )}
                    </div>
                :
                null
                }
                { pageNum !== null ?
                    <div className="page-div">
                        <ListGroup horizontal>
                            {pagePreBtn === -1 ? null
                                :
                                <ListGroup.Item onClick={() => this.updatePage( pagePreBtn)}>이전</ListGroup.Item>
                            }
                            { pageNum.map((index, arrPage) => (
                                arrPage.length-1 !== index &&
                                    <ListGroup.Item className={this.props.pageInfo.currentPage === index ? 'select' : null}
                                    key={index} onClick={() => this.updatePage( index)}>{index+1}</ListGroup.Item>
                            ))}
                            {pageNextBtn === -1 ? null
                                :
                                <ListGroup.Item onClick={() => this.updatePage( pageNextBtn)}>다음</ListGroup.Item>
                            }

                        </ListGroup>
                    </div>
                :
                null
                }
            </div>

        );
    }
}

export default NewsList;