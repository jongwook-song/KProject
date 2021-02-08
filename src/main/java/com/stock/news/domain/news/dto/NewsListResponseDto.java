package com.stock.news.domain.news.dto;

import com.stock.news.domain.news.News;
import lombok.Getter;

/**
 * 뉴스 날짜별 return해주는 객체
 */

@Getter
public class NewsListResponseDto {
    private Long id; // pk

    private String title; // 뉴스 타이틀
    private String content; // 기사 일부분
    private String company; // 신문
    private String url; // 뉴스 url
    private String pictureurl;


    public NewsListResponseDto( News entity){
        this.id = entity.getId();
        this.title = entity.getTitle();
        this.content = entity.getContent();
        this.company = entity.getCompany();
        this.url = entity.getUrl();
        this.pictureurl = entity.getPictureurl();
    }
}
