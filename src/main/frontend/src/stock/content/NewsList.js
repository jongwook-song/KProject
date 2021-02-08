import React from 'react';
import './css/News.css'
class NewsList extends React.Component {
    render() {

        const newsList = this.props.newsList;
        console.log(newsList);
        return (
            <div className="new-list-div">
                { newsList !== null ?
                    <div className="news-div">
                        { newsList.map((news, index) =>
                        <div className="news-content">
                            <div className="img-div">
                                <img src={news.pictureurl}></img>
                            </div>
                            <div className="news-content-info">
                                <div className="news-title">
                                    <a href={news.url}><span>{news.title}</span></a>
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
            </div>

        );
    }
}

export default NewsList;