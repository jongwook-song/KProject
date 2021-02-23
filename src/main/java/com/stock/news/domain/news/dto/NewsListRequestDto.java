package com.stock.news.domain.news.dto;

import com.stock.news.domain.news.News;
import lombok.Getter;

@Getter
public class NewsListRequestDto {
    private Long id; // pk

    private String searchText;
    private String searchdate;
    private int currentPage;

}
