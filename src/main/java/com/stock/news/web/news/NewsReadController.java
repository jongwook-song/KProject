package com.stock.news.web.news;

import com.stock.news.domain.news.dto.NewsListResponseDto;
import com.stock.news.service.news.NewsService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * [J0004] 날짜별 뉴스 가져오기
 */

@RequiredArgsConstructor
@RestController
public class NewsReadController {

    private final NewsService newsService;
//
//    // [J0004] Start
    @GetMapping("/search/news/{date}")
    public List<NewsListResponseDto> findByDate(@PathVariable String date){
        return newsService.findByDate( date);
    }
//    // [J0004] End
    @GetMapping("/save/news")
    public void saveNews(){
        newsService.batchExecute();
    }
}
