package com.stock.news.service.news;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest
public class NewsServiceTest {
    @Autowired
    private NewsService newsService;

    @Test
    public void 뉴스_크롤링_테스트() throws Exception{

        String test = newsService.batchExecute();

        assertThat( "test").isEqualTo( "test");

    }
}
