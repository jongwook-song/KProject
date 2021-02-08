package com.stock.news.service.news;

import com.stock.news.domain.news.News;
import com.stock.news.domain.news.NewsRepository;
import com.stock.news.domain.news.dto.NewsListResponseDto;
import lombok.RequiredArgsConstructor;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class NewsService {

    private final NewsRepository newsRepository;

    // url 형식 ex : https://search.naver.com/search.naver?&where=news&query=6%EC%9D%BC&pd=1&ds=2021.01.29&de=2021.02.05&mynews=0&cluster_rank=1&start=41

    private final String initUrl = "https://search.naver.com/search.naver?&where=news&query=";
    private final String startDate = "&pd=1&ds=";
    private final String endDate = "&de=";
    private final String pageNum = "&mynews=0&cluster_rank=1&start=";
    private final String numOne = "1";
    private String startDateValue = null;
    private String endDateValue = null;

    // [J0004] Start
    public List<NewsListResponseDto> findByDate(String date){
        List<NewsListResponseDto> reulsts =  newsRepository.findByDate( date).stream()
                .map(NewsListResponseDto::new)
                .collect(Collectors.toList());

        return reulsts;
    }
    // [J0004] End

    public List<NewsListResponseDto> findByUrl(String url){
        List<NewsListResponseDto> reulsts =  newsRepository.findByUrl( url).stream()
                .map(NewsListResponseDto::new)
                .collect(Collectors.toList());
        return reulsts;
    }

    // [J0006] Start
    public String batchExecute(){ // 당일 기준 7일까지 뉴스 검색 후 저장

        Calendar cal = Calendar.getInstance();
        SimpleDateFormat format = new SimpleDateFormat( "yyyy.MM.dd");
//
//        cal.setTime( new Date());
//
//        endDateValue = format.format(cal.getTime());
        int currentDate = cal.getTime().getDate();
//        cal.add(Calendar.DATE, -7);
//        startDateValue = format.format(cal.getTime());

        String url = null;

        for( int i=0; i<7; i++){

            cal.setTime( new Date());

            cal.add(Calendar.DATE, i);
            endDateValue = format.format(cal.getTime());
            currentDate = cal.getTime().getDate();
            cal.add(Calendar.DATE, -7);
            startDateValue = format.format(cal.getTime());

            url = initUrl+currentDate+"일"+startDate+startDateValue+endDate+endDateValue+pageNum;
//        url = initUrl+currentDate+"일"+startDate+startDateValue+endDate+endDateValue+pageNum;
//            System.out.println( "start : " + startDateValue + "\tend : " + endDateValue + "\tcur : " + currentDate);
//            System.out.println( url);
            startNeswInfo( url);
        }

        return "test";
    }

    public void startNeswInfo( String urlInfo) { // 뉴스 정보 가져오기
        StringBuffer totalUrl = null;
        int count= 0;

        Document newsDoc = null;

        try {
            for( int i=0; i<10; i++) {
                totalUrl = new StringBuffer();
                totalUrl.append(urlInfo);
                totalUrl.append(i);
                totalUrl.append(numOne);

                System.out.println( "totalUrl : " + totalUrl);

                newsDoc = Jsoup.connect( totalUrl.toString()).get();

                getDetailInfo( newsDoc);

            }
        }catch (Exception e){

        }
    }

    public void getDetailInfo( Document newsDoc){

        String title = null;
        String content = null;
        String company = null;
        String url = null;
        String pictureurl = null;
        //String date = null;
        Long initView = 0L;

        List<NewsListResponseDto> reulsts = null;

        Elements newsElements = newsDoc.select( ".list_news li.bx");

        for( Element newsElement : newsElements) {
            title = newsElement.select(".news_area .news_tit").get(0).text();
            company = newsElement.select(".info_group a").get(0).text();
            content = newsElement.select(".dsc_wrap a").get(0).text();
            url = newsElement.select(".dsc_wrap a").attr( "href");
            pictureurl = newsElement.select(".api_ani_send img").attr( "src");

            reulsts = findByUrl( url);

            System.out.println( url);

            if( reulsts.size() < 1) {
                newsRepository.save(News.builder()
                        .title(title)
                        .content(content)
                        .company(company)
                        .url(url)
                        .pictureurl(pictureurl)
                        .view(initView)
                        .date(endDateValue)
                        .build()
                );
            }
        }
    }

    // [J0006] End
}
