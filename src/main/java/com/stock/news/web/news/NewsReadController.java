package com.stock.news.web.news;

import com.stock.news.domain.news.News;
import com.stock.news.domain.news.dto.NewsListRequestDto;
import com.stock.news.domain.news.dto.NewsListResponseDto;
import com.stock.news.service.news.NewsService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * [J0004] 날짜별 뉴스 가져오기
 * [J0007] 뉴스 상세 검색(텍스트)
 */

@RequiredArgsConstructor
@RestController
public class NewsReadController {

    private final NewsService newsService;
    // [J0004] Start
    @PostMapping("/search/news")
    public Page<News> findByDate(@RequestBody NewsListRequestDto newsListRequestDto){
        return newsService.findBySearchdate( newsListRequestDto);
    }
    // [J0004] End
    // [J0007] 뉴스 상세 검색(텍스트) Start
    @PostMapping("/search/newsdetail")
    public Page<News> searchNewsDetail(@RequestBody NewsListRequestDto newsListRequestDto){
        return newsService.searchNewsDetail( newsListRequestDto);
    }
    // [J0007] 뉴스 상세 검색(텍스트) End
}
