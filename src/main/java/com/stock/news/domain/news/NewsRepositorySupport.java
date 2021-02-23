package com.stock.news.domain.news;

import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.Predicate;
import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.stereotype.Repository;

@Repository
public class NewsRepositorySupport extends QuerydslRepositorySupport {
    private final JPAQueryFactory queryFactory;

    public NewsRepositorySupport(JPAQueryFactory queryFactory) {
        super(News.class);
        this.queryFactory = queryFactory;
    }

    public Predicate findBySearchdate( String searchDate){
        QNews qNews = QNews.news;

        BooleanBuilder builder = new BooleanBuilder();

        builder.and( qNews.searchdate.eq( searchDate));

        return builder;
    }

    public Predicate searchNewsDetail( String searchDate, String searchText){
        QNews qNews = QNews.news;

        BooleanBuilder builder = new BooleanBuilder();
        BooleanBuilder builder2 = new BooleanBuilder();

        builder2.or( qNews.title.like("%"+searchText+"%"));
        builder2.or( qNews.content.like("%"+searchText+"%"));

        builder.and( qNews.searchdate.eq( searchDate));
        builder.and( builder2);


        return builder;
    }
//
//    public int getTotalCount(Predicate searchCondition){
//        QFood qfood = QFood.food;
//        List<Long> foodCount = queryFactory.select( qfood.id.count()).from(qfood).where( searchCondition).fetch();
//
//        int result = 0;
//
//        if( foodCount.size() >0 && foodCount != null){
//            result = Long.valueOf(foodCount.get(0)).intValue();
//        }
//
//        return result;
//    }
//
//    public List<Food> findByFoodType( String foodType){
////SELECT f FROM Food f WHERE f.foodType=:foodType and f.lastCheck=1
//        QFood qfood = QFood.food;
//        BooleanBuilder builder = new BooleanBuilder();
//
//        builder.and( qfood.foodtype.eq(foodType));
//        builder.and( qfood.lastcheck.eq(1));
//
//        List<Food> initFood = queryFactory.select( qfood)
//                .from( qfood)
//                .where(builder)
//                .fetch();
//        return initFood;
//    }
}

