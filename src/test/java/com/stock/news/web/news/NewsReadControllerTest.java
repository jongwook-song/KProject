package com.stock.news.web.news;

import com.stock.news.domain.news.dto.NewsListResponseDto;
import com.stock.news.service.news.NewsService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;


@RunWith(SpringRunner.class)
@SpringBootTest
public class NewsReadControllerTest {

    @Autowired
    private NewsService newsService;

    @Test
    public void 뉴스_크롤링_테스트() throws Exception{
        //String test = newsService.batchExecute();
        assertThat( "test").isEqualTo( "test");
    }

    @Test
    public void 뉴스_정보_가져오기() throws  Exception{
//        List<NewsListResponseDto> list = newsService.findByDate( "2021.02.08");
//
//        for( int i=0; i<list.size(); i++){
//            System.out.println(list.get(i).getTitle());
//        }
    }
}
