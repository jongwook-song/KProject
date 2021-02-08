package com.stock.news.domain.news;

import com.stock.news.domain.BaseTimeEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity                     // 생성일 정보는 상속
public class News extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // pk

    private String title; // 뉴스 타이틀
    private String content; // 기사 일부분
    private String company; // 신문
    private String url; // 뉴스 url
    private String pictureurl; // 기사 작은 사진 url
    private Long view; // 사용자가 뉴스를 클릭한 횟수, 초기 값1
    private String date; // 날짜 검색용
    //public date time형 날짜


    @Builder
    public News ( Long id, String title, String content, String company, String url, String pictureurl, Long view, String date){
        this.id = id;
        this.title = title;
        this.content = content;
        this.company = company;
        this.url = url;
        this.pictureurl = pictureurl;
        this.view = view;
        this.date = date;
    }
}
