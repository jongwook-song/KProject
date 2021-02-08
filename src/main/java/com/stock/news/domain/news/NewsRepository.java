package com.stock.news.domain.news;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 *  [J0004] 날짜별 뉴스 가져오기
 */

public interface NewsRepository extends JpaRepository< News, Long> {
    // [J0004] Start
    List<News> findByDate(String date);
    // [J0004] End
    // Url 정보로 news 가져오기
    List<News> findByUrl(String Url);
}
