package com.stock.news.domain.news;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;

import java.util.List;

/**
 *  [J0004] 날짜별 뉴스 가져오기
 */

public interface NewsRepository extends JpaRepository< News, Long>, QuerydslPredicateExecutor {
    // [J0004] Start
    List<News> findBySearchdate(String date);
    // [J0004] End
    // Url 정보로 news 가져오기
    List<News> findByUrl(String Url);
}
